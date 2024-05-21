import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit(): void{
    
    document.addEventListener('DOMContentLoaded', () => {
      const menuToggle = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');
      const navLinksItems = document.querySelectorAll('.nav-links li');
    
      menuToggle?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
      });
    
      navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
          navLinks?.classList.remove('active');
          // navLinks.style.display = 'none'; // Comentado porque não faz sentido ocultar o elemento que já foi removido da lista de classes
        });
      });
    });

  }

}
