import { Injectable } from '@angular/core';
import { Item } from './item/Item';
Item;
@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito: Item[] = [];

  agregarAlCarrito(item: Item) {
    this.carrito.push(item);
  }

  quitarDelCarrito(item: Item) {
    const index = this.carrito.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
  }

  obtenerCarrito(): Item[] {
    return this.carrito;
  }

  calcularPrecioTotal(): number {
    return this.carrito.reduce((total, plato) => total + plato.precio, 0);
  }
  constructor() {}
}
