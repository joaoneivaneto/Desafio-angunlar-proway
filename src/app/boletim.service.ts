import { Injectable } from '@angular/core';
import { IAluno, alunos } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class BoletimService {
  aluno:IAluno[]=alunos;
  
  constructor() { }
   
  getAll(){
    return this.aluno;
  }

  Cadastrar(aluno:IAluno){
    this.aluno.push(aluno)
  } 

}
  
  
  
  


