import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Prune',
      descripcion: 'pijama',
      precio: 59.99,
      imagen: 'https://www.victoriassecret.com/p/760x1013/png/zz/24/10/03/00/1123873170CV_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Print',
      descripcion: 'pijama',
      precio: 59.99,
      imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/24/10/16/09/112542776GMI_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Safari Gold Leopard ',
      descripcion: 'pijama',
      precio: 59.99,
      imagen: 'https://www.victoriassecret.com/p/1520x2026/png/zz/24/08/29/23/112534026F98_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  {
    id: 4,
    nombre: 'Lipstick Lovely Plaid ',
    descripcion: 'pijama',
    precio: 59.99,
    imagen: 'https://www.victoriassecret.com/p/1520x2026/png/zz/24/10/29/02/1125340370AZ_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 5,
    nombre: 'Pretty Blossom Shimmer ',
    descripcion: 'pijama',
    precio: 59.99,
    imagen: 'https://www.victoriassecret.com/p/760x1013/png/zz/24/10/01/02/112534036FBG_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
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
