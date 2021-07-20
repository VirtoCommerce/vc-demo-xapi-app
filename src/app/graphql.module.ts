import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { NormalizedCacheObject } from '@apollo/client/cache';
import { AppInitializerService } from './services/app-initializer.service';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<NormalizedCacheObject> {
  return {
    link: httpLink.create({
      uri: () => `${environment.variables.platformUrl}/graphql`,
    }),
    cache: new InMemoryCache(),
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
        AppInitializerService,
      ],
    },
  ],
})
export class GraphQLModule {}
