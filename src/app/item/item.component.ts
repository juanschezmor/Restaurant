import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './Item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item: Item;
  @Output() añadirCarrito = new EventEmitter<Item>();

  constructor() {
    this.item = new Item(
      0,
      'https://picsum.photos/200/300',
      'Nombre del item',
      'Descripción del item',
      0,
      'Meal'
    );
  }
  agregarCarrito() {
    this.añadirCarrito.emit(this.item);
    console.log(this.item);
  }
}
