import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public carritoService: CarritoService;
  constructor(private _carritoService: CarritoService) {
    this.carritoService = _carritoService;
  }
  showSidebar = false;
  isDropdownVisible = false;
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  toggleCarrito() {
    console.log(this.carritoService.obtenerCarrito());
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
