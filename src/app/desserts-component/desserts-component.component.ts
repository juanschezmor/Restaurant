import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Item } from '../item/Item';
import { ProductService } from '../product-service.service';
@Component({
  selector: 'app-desserts-component',
  templateUrl: './desserts-component.component.html',
  styleUrls: ['./desserts-component.component.css'],
})
export class DessertsComponent {
  desserts: Item[] = [];

  constructor(
    private carritoService: CarritoService,
    private productService: ProductService
  ) {}
  ngOnInit() {
    this.loadDesserts(); // Cargar productos al inicializar el componente
  }
  loadDesserts() {
    this.productService.getCategoryProducts('Dessert').subscribe({
      next: (data) => {
        console.log(data);
        this.desserts = data;
        console.log(this.desserts);
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
    const carrito = this.carritoService.obtenerCarrito();

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
