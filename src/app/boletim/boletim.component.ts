import { Component, OnInit } from '@angular/core';

import { IAluno } from '../alunos';
import { BoletimService } from '../boletim.service';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {
  alunos:IAluno[] | undefined;
  constructor(private boletim : BoletimService) { }

  ngOnInit() {
    const notas=this.boletim.getAll();
    this.alunos=notas;
    
  
  }

}
