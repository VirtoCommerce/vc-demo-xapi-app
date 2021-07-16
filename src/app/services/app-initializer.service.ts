import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EnvironmentVariables } from 'src/environments/environment.variables';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  constructor(private readonly httpClient: HttpClient) { }

  async initialize(): Promise<void> {
    await this.httpClient.get<EnvironmentVariables>('environments/environment.variables.json')
      .pipe(
        map(response => environment.variables = response),
        catchError(() => of(false))
      )
      .toPromise();
  }
}
