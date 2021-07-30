import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { NormalizedCacheObject } from '@apollo/client/cache';
import { HttpClient, HttpParams } from '@angular/common/http';

export function createApollo(httpLink: HttpLink, httpClient: HttpClient): ApolloClientOptions<NormalizedCacheObject>  {
  const basic = setContext(() => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));
  const auth = setContext(async operation => {
    let token: string | null = null;

    if (operation.operationName === 'updateMemberDynamicProperty') {
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
    }
    else {
      token = null;
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
      ],
    },
  ],
})
export class GraphQLModule {}
