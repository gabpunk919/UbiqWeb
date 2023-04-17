import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ubiq';
  searchTerm: string = '';

search(): void {
  console.log('Recherche pour:', this.searchTerm);
  // Ajouter ici la logique de recherche
}
}
