import { Component } from '@angular/core';
import { Inoticias } from '../../interfaces/inoticias.interface';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrNoticias: Inoticias [] = []
  newNoticia: Inoticias = {
    title: "",
    image: "",
    notice: "",
    date: "",
  }

  constructor() {
    this.arrNoticias = [
      { title: "Primera Noticia", image: "url blabla", notice: "noticia 1", date: "04-05-2024"},
      { title: "Segunda Noticia", image: "url blabla", notice: "noticia 2", date: "10-05-2024"}
    ]
  }

  ngOnInit(): void {
    this.cargarNoticias()
  }

  agregarNoticia(): void {
    this.arrNoticias.push({...this.newNoticia})
    this.newNoticia = {title: "", image: "", notice: "", date: ""}
    this.cargarNoticias()
  }

  cargarNoticias(): void {
    let html: string = "";
    this.arrNoticias.forEach((noticia: Inoticias) =>{
      html += `
      <li>
      <h2>${noticia.title}</h2>
      <img src="${noticia.image}" alt="${noticia.title}" />
      <p><em>${noticia.date}</em></p>
      </li>`
    })

    const listaNoticias = document.querySelector('.listaNoticias ul');
    if (listaNoticias) {
    listaNoticias.innerHTML = html;
    }
  }
}
