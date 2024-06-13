import { Component, OnInit } from '@angular/core';
import { IAluno } from '../alunos';
import { BoletimService } from '../boletim.service';
import { FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  aluno:IAluno | undefined
  situcao:string='';
  media:number=0;
  nome:string='';
  nota1:number=0;
  nota2:number=0;
  formAluno = this.fb.group({
    nome:["",[
      Validators.minLength(4),
      Validators.required
    ]],
    nota1:["",[
      Validators.required
    ]],
    nota2:["",[
      Validators.required
    ]]
  })
  constructor(
    private botetim:BoletimService, 
    private fb:FormBuilder,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
  }
  
  enviarFormulario(){
    console.log(this.nome,this.nota1,this.nota2)
    this.media=(this.nota1 + this.nota2)/2
    this.media>=7 ? this.situcao='aprovado': this.situcao='reprovado';
    const alunoNovo:IAluno={
    ...this.aluno!,
    id:2,
    media:this.media,
    nome:this.nome,
    nota1:this.nota1,
    nota2:this.nota2,
    situacao:this.situcao
    }
    this.botetim.Cadastrar(alunoNovo);
    this.snackBar.open("cadastro feito com sucesso","ok",{
      duration:2000,
      verticalPosition:'top',
      horizontalPosition:'left'
    })
    this.formAluno.reset()

  }

}
