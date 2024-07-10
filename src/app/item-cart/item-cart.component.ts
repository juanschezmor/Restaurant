import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item/Item';
@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css'],
})
export class ItemCartComponent {
  @Input() item: Item;
  @Output() quitarPlato = new EventEmitter<Item>();

  constructor() {
    this.item = new Item(
      0,
      'https://picsum.photos/200/300',
      'Nombre del plato',
      'Descripción del plato',
      0,
      'Meal'
    );
  }
  onQuitarClick() {
    this.quitarPlato.emit(this.item);
  }
}
