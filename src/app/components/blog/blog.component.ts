import { Component } from '@angular/core';
import { Inoticias } from '../../interfaces/inoticias.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrNoticias: Inoticias [] = []
  newNoticias: Inoticias = {
    title: "",
    image: "",
    notice: "",
    date: "",
  }

  constructor() {
    this.arrNoticias = [
      { title: "Primera Noticia", image: "url blabla", notice: "noticia 1", date: "04-05-2024"},
      { title: "Segunda Noticia", image: "url blabla", notice: "noticia 2", date: "10-05-2024"}
    ]}
}
