export interface IAluno{
    id:number;
    nota1:number;
    nota2:number;
    nome:string;
    media:number;
    situacao:string;

    
}


export const alunos:IAluno[]=[
    {id:1,nome:"João",nota1:10.0,nota2:9.0,media:9.5,situacao:'aprovado'},
    {id:2,nome:"Rafael",nota1:7.5,nota2:6.5,media:7,situacao:'aprovado'},
    {id:3,nome:"Bruno",nota1:5.5,nota2:8.5,media:7,situacao:'aprovado'},

]
   