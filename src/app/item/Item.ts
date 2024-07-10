export class Item {
  id: number;
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
  alergias: string[];
  productType: string;

  constructor(
    id: number,
    imagen: string,
    nombre: string,
    descripcion: string,
    precio: number,
    productType: string
  ) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.productType = productType;
    this.alergias = [];
  }
  setAlergias(alergias: string[]) {
    this.alergias = alergias;
  }
}
