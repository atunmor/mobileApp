import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

export interface PersonajesResult {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
  results: Array<Personaje>
}

export interface Personaje {
  id: number;
  name: string;
  species: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private readonly http = inject(HttpClient);

  constructor() { }

  cargar() {
    return this.http.get<PersonajesResult>('https://rickandmortyapi.com/api/character')
    .pipe( map( (res: PersonajesResult) => res.results ) );
  }
}
