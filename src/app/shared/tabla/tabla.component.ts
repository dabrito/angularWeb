import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  datos = [
    { id: 1, nombre: 'Juan Pérez', edad: 25 },
    { id: 2, nombre: 'María Gómez', edad: 30 },
    { id: 3, nombre: 'Carlos Díaz', edad: 28 },
    { id: 4, nombre: 'Ana López', edad: 35 }
  ];
}
