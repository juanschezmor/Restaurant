import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Item } from './item/Item';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/'; // Cambia esto con la URL de tu servidor

  constructor(private http: HttpClient) {}
  getCategoryProducts(productType: string): Observable<Item[]> {
    const url = `http://localhost:8080/category-products?productType=${productType}`;

    return this.http.get<any[]>(url).pipe(
      switchMap((data) =>
        forkJoin(
          data.map((itemData) =>
            this.getProductAllergies(itemData.productId).pipe(
              map((allergies) => {
                const item = new Item(
                  itemData.productId,
                  itemData.urlImage,
                  itemData.name,
                  itemData.description,
                  itemData.price,
                  itemData.productType
                );
                item.setAlergias(allergies);
                return item;
              })
            )
          )
        )
      )
    );
  }

  getProductAllergies(productId: number): Observable<string[]> {
    const url = `${this.baseUrl}product-allergies?productId=${productId}`;

    return this.http.get<string[]>(url);
  }
}
