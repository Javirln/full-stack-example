import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private endpoint: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  getPizzas(): Observable<any> {
    return this.httpClient.get(`${this.endpoint}/pizzas`);
  }
}
