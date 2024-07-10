import { Component } from '@angular/core';
import { Item } from '../item/Item';
import { CarritoService } from '../carrito.service';
import { ProductService } from '../product-service.service';
@Component({
  selector: 'app-drinks-component',
  templateUrl: './drinks-component.component.html',
  styleUrls: ['./drinks-component.component.css'],
})
export class DrinksComponent {
  drinks: Item[] = [];
  constructor(
    private carritoService: CarritoService,
    private productService: ProductService
  ) {}

  title = 'Platos';

  ngOnInit() {
    this.loadDrinks(); // Cargar productos al inicializar el componente
  }
  loadDrinks() {
    this.productService.getCategoryProducts('Drink').subscribe({
      next: (data) => {
        console.log(data);
        this.drinks = data;
        console.log(this.drinks);
      },
      error: (error) => {
        console.error('Error al cargar los productos:', error);
      },
    });
  }

  obtenerCarrito() {
    return this.carritoService.obtenerCarrito();
  }
  calcPrecioTotal() {
    return this.carritoService.calcularPrecioTotal();
  }

  precioTotalCarrito: number = 0;
  calcPrecioCarrito() {
    this.precioTotalCarrito = 0;
    const carrito = this.obtenerCarrito();

    carrito.forEach((plato) => {
      this.precioTotalCarrito += plato.precio;
      console.log('Añadiendo precio al carrito...' + plato.precio);
    });
  }

  onPlatoAgregado(plato: Item) {
    this.carritoService.agregarAlCarrito(plato);
    this.showCarrito = true;
    console.log(this.showCarrito);
  }

  onQuitarPlato(plato: Item) {
    this.carritoService.quitarDelCarrito(plato);
    if (this.carritoService.obtenerCarrito().length === 0) {
      this.showCarrito = false;
    }
  }

  showCarrito: boolean = false;
  toggleCarrito() {
    this.showCarrito = !this.showCarrito;
    console.log('Se ha abierto/cerrado el carrito');
  }
}
