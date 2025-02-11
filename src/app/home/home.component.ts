import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from '../shared/contacto/contacto.component';
import { TablaComponent } from '../shared/tabla/tabla.component';
import { RecursosService } from '../servicios/recursos.service';
import { Foto } from '../interfaz/foto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ContactoComponent,
    TablaComponent,
    HttpClientModule,
  ],
  providers: [RecursosService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'AngularBootstrap';
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe((respuesta) => {
      this.fotos = respuesta as Array<Foto>;
    });
  }
}
