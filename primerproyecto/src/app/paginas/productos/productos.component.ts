import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Body Splash Bare Vainilla',
      descripcion: 'Body splash',
      precio: 29.99,
      imagen: 'https://www.victoriassecret.com/p/1000x1333/tif/zz/23/09/29/02/112285048527_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Body splash Velvet Petals',
      descripcion: 'Body splash',
      precio: 29.99,
      imagen: 'https://www.victoriassecret.com/p/1000x1333/tif/zz/23/09/15/01/112285047928_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Body splash Pure Seduction ',
      descripcion: 'Body splash',
      precio: 29.99,
      imagen: 'https://www.victoriassecret.com/p/1000x1333/tif/zz/23/09/15/01/112285041340_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  {
    id: 4,
    nombre: 'Body splash Love Spell ',
    descripcion: 'Body splash',
    precio: 29.99,
    imagen: 'https://www.victoriassecret.com/p/1000x1333/tif/zz/23/09/29/02/112285042017_OM_F.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 5,
    nombre: 'Body Lotion Love Spell ',
    descripcion: 'Body Lotion',
    precio: 19.99,
    imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/23/10/11/01/112145532017_OF_F.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 6,
    nombre: 'Body Lotion Bare Vainilla',
    descripcion: 'Body Lotion',
    precio: 19.99,
    imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/23/10/11/01/112145538527_OF_F.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 7,
    nombre: 'Body Lotion Coconut Passion ',
    descripcion: 'Body Lotion',
    precio: 19.99,
    imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/23/10/11/01/112145533336_OF_F.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 8,
    nombre: 'Body Lotion Pure Seduction ',
    descripcion: 'Body Lotion',
    precio: 19.99,
    imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/23/10/11/01/112145531340_OF_F.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 9,
    nombre: 'Body Lotion Velvet Petals ',
    descripcion: 'Body Lotion',
    precio: 19.99,
    imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/23/10/11/01/112145537928_OF_F.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 10,
    nombre: 'Body Lotion Aqua Kiss ',
    descripcion: 'Body Lotion',
    precio: 19.99,
    imagen: 'https://www.victoriassecret.com/p/1000x1333/png/zz/23/10/11/01/112145534760_OF_F.jpg', // Asegúrate de que esta ruta sea correcta
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
