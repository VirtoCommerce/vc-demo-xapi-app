import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { NormalizedCacheObject } from '@apollo/client/cache';
import { HttpClient } from '@angular/common/http';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<NormalizedCacheObject> {
  const basic = setContext(() => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));
  const auth = setContext(() => {
    // Temporary do nothing. Add Authentication: Bearer {token} header here on login implmentation
    return { };
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
