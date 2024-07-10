import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }
  public findAll() {
    return this.http.get<Order[]>(this.url + 'orders');
  }
}
