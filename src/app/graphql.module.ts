import { Store } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { NormalizedCacheObject } from '@apollo/client/cache';
import { selectLoginState } from './store/login/login.selectors';
import { take } from 'rxjs/operators';
import { State } from './store/login/login.reducer';
import { AdminTokenService } from './services/admin-token.service';

export function createApollo(
  httpLink: HttpLink,
  store: Store,
  adminToken: AdminTokenService
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
    case 'getUser':
    {
      token = (await (adminToken.getToken())).access_token;
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
        Store,
        AdminTokenService,
      ],
    },
  ],
})
export class GraphQLModule {}
