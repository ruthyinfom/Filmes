import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmeService } from '../filme-service';
import { Filme } from './filme';

@Component({
  selector: 'app-consulta-filme',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './consulta-filme.html',
  styleUrl: './consulta-filme.scss',
})
export class ConsultaFilme {

  private readonly service = inject(FilmeService);
  private readonly fb = inject(FormBuilder);

  filmeEncontrado = signal<Filme | undefined>(undefined);
  listaFilmes = signal<Filme[]>([]);

  formulario: FormGroup = this.fb.group({
    nome: ['', [Validators.required]]
  });

  buscarFilme(titulo: string): void {
    this.service.obterFilme(titulo).subscribe((filme) => {
      this.filmeEncontrado.set(filme);
    });
  }

  buscarFilmes(titulo: string): void {
    this.service.obterFilmes(titulo).subscribe((resultado) => {
      this.listaFilmes.set(resultado.Search);
    });
  }
}