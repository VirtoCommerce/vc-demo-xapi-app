import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminTokenService {
  constructor(private readonly httpClient: HttpClient) { }

  async getToken(): Promise<{access_token: string}> {
    return await this.httpClient.post<{access_token: string}>(
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
    ).toPromise();
  }
}
