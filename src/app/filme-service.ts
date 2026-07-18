import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Filme } from './consulta-filme/filme';
import { Filmes } from './consulta-filme/filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  readonly API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=3b6dfd74`
  #http = inject(HttpClient)

  obterFilme(titulo: string): Observable<Filme> {
    return this.#http.get<Filme>(`${this.API_URL}&t=${titulo}`)
  }

  obterFilmes(titulo:string): Observable<Filmes>{
        return this.#http.get<Filmes>(`${this.API_URL}&s=${titulo}`)
    }
 
}
