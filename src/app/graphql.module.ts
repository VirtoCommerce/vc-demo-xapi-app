import { Store } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { NormalizedCacheObject } from '@apollo/client/cache';
import { HttpClient, HttpParams } from '@angular/common/http';
import { selectLoginState } from './store/login/login.selectors';
import { take } from 'rxjs/operators';
import { State } from './store/login/login.reducer';

export function createApollo(
  httpLink: HttpLink,
  httpClient: HttpClient,
  store: Store
): ApolloClientOptions<NormalizedCacheObject>  {
  const basic = setContext(() => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));
  const auth = setContext(async operation => {
    let token: string | null = null;
    switch (operation.operationName) {
    case 'createUser':
    case 'updateMemberDynamicProperties':
    case 'order':
    {
      token = (await httpClient.post<{access_token: string}>(
        `${environment.variables.platformUrl}/connect/token`,
        new HttpParams({ fromObject: {
          grant_type: 'password',
          username: 'admin',
          password: 'store',
        } }).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      ).toPromise()).access_token;
      break;
    }

    default:
    {
      const state = await store.select(selectLoginState).pipe(take(1))
        .toPromise<State>();
      token = state.token;
      break;
    }
    }

    return token === null
      ?  {}
      : {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  });
  const link = ApolloLink.from([
    basic,
    auth,
    httpLink.create({
      uri: () => `${environment.variables.platformUrl}/graphql`,
    }),
  ]);
  const cache = new InMemoryCache();
  return {
    link,
    cache,
    connectToDevTools: true,
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [
        HttpLink,
        HttpClient,
        Store,
      ],
    },
  ],
})
export class GraphQLModule {}
