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
export class JsonComponent {
  title = 'JsonComponent';
  posts: Post[] = [];
  selectedPost: Post | null = null;

  constructor(private recursosService: RecursosService) {
    recursosService.getPosts().subscribe(respuesta => {
      this.posts = respuesta as Post[];
    });
  }

  getPostDetails(id: number) {
    this.recursosService.getPostById(id).subscribe(respuesta => {
      this.selectedPost = respuesta as Post;
    });
  }
}
