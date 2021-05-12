import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService:  CursosService;

  constructor(private _cursosService: CursosService) {
    // this.cursosService = new CursosService();
    // this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(  //como o criouNovoCurso é estático na classe CursosService, eu não preciso da instância, só chamar através de CursosService.criouNovoCurso
      curso => this.cursos.push(curso)
    );
  }

}
