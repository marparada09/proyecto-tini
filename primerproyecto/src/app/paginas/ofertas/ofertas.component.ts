import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Body Splash Bare Vainilla',
      descripcion: 'Body splash',
      precio: 30.00,
      imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/24/07/31/11/112483073TDU_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Body splash Velvet Petals',
      descripcion: 'Body splash',
      precio: 34.99,
      imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/23/11/14/01/1117275868RK_OF_F.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Classic Silk Corset Set',
      descripcion: 'Corsets',
      precio: 29.99,
      imagen: 'https://www.victoriassecret.com/p/760x1013/png/zz/24/02/10/00/1123912111T1_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  {
    id: 4,
    nombre: 'Cotton Sleepshirt',
    descripcion: 'Remera',
    precio: 29.99,
    imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/24/02/02/20/111921536BR2_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 5,
    nombre: 'pijama rosa ',
    descripcion: 'Pijama',
    precio: 19.99,
    imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/24/01/17/00/1121467764WA_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
 
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}