import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecursosService } from '../servicios/recursos.service';
import { Post } from '../interfaz/post';

@Component({
  selector: 'app-json',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [RecursosService],
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent{
  title = 'JsonComponent';
  posts: Post[] = [];
  constructor( private recursosService: RecursosService ){
    recursosService.getPosts().subscribe(respuesta => {
      this.posts = respuesta as Array<Post>;
    });
  }
}
