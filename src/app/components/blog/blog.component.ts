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
      { title: "Las mejores playas de España", image: "images/noticia_1.jpg", notice: "Refrescate este verano en la mejor playa de España. Las altas temperaturas han llegado para quedarse. La ola de calor que asola gran parte del país nos tiene recluidos en lugares con ventilador, aire acondicionado o buscando las sombras cuando es irremediable salir a la calle. No obstante, el calor no tiene por qué frenar nuestro ocio, refrescate en esta playa de Cádiz y pasa unos días inolvidables", date: "04-07-2024"},
      { title: "Concurso de tortillas", image: "images/noticia_2.jpg", notice: "Si te gusta cocinar, no te quedes sin participar en el concurso de tortillas que tendrá lugar en Madrid el próximo 20 de agosto en el Restaurante Pepe. Puedes ganar una comida para dos en el Restaurante Pepe", date: "07-07-2024"}
    ]
  }

  ngOnInit(): void {
    this.cargarNoticias()
  }

  agregarNoticia(): void {
    if (!this.newNoticia.title || !this.newNoticia.image || !this.newNoticia.notice || !this.newNoticia.date) {
      alert("Todos los campos son obligatorios")
      return;
    }

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
      <p>${noticia.notice}</p>
      <p><em>${noticia.date}</em></p>
      </li>`
    })

    const listaNoticias = document.querySelector('.listaNoticias ul');
    if (listaNoticias) {
    listaNoticias.innerHTML = html;
    }
  }
}
