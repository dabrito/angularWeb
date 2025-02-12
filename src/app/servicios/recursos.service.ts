import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaz/post';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get('https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json');
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiURL);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiURL}/${id}`);
  }
}
