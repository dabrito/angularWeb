import { Component } from '@angular/core';

@Component({
  selector: 'app-thumbnail-table',
  standalone: true,
  imports: [],
  templateUrl: './thumbnail-table.component.html',
  styleUrl: './thumbnail-table.component.css'
})

export class ThumbnailTableComponent {
  data = [
    ['Dato 1', 'Dato 2', 'Dato 3'],
    ['Dato 4', 'Dato 5', 'Dato 6'],
    ['Dato 7', 'Dato 8', 'Dato 9'],
    ['Dato 10', 'Dato 11', 'Dato 12']
  ];
}