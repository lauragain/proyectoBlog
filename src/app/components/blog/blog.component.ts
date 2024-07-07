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
}
