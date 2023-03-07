function aprovadoReprovado(aluno){
    if(aluno.calcularMedia() >= curso.notaAprovacao && aluno.qtdFaltas < curso.faltasMaximas){
        return true;
    }else if(aluno.calcularMedia() >= curso.notaAprovacao && aluno.qtdFaltas == curso.faltasMaximas){
        if(aluno.calcularMedia() > (curso.notaAprovacao+(curso.notaAprovacao*0.1))){
            return true;
        }
        return false;
    }
    return false;
}

class Aluno{
    constructor (nome, qtdFaltas, notas){
        this.nome = nome;
        this.qtdFaltas = qtdFaltas;
        this.notas = notas;
    }
    calcularMedia(){
        let media = 0;
        for (let nota of this.notas){
            media += nota;
        }
        return (media / this.notas.length).toFixed(1);
    }
    faltas(){
        this.qtdFaltas ++;
    }
}

const curso = {
    nomeCurso:'Programação Imperativa',
    notaAprovacao: 7.5,
    faltasMaximas: 5,
    listaEstudantes: [],
    addAluno(nome, qtdFaltas, notas){
        const aluno = new Aluno(nome, qtdFaltas, notas);
        this.listaEstudantes.push(aluno);
    },
    resultadoAluno(nomeAluno){
        for (let aluno of this.listaEstudantes){
            if(aluno.nome == nomeAluno){
                return aprovadoReprovado(aluno);
            }
        }
        
    },
    resultados(){
        const alunosResultados = [];
        for (let aluno of this.listaEstudantes){
            alunosResultados.push(this.resultadoAluno(aluno.nome));
        }
        return alunosResultados;
    }
}

curso.addAluno("Marcos Otani", 4, [6.5, 5.5, 6.5]);
curso.addAluno("Renan Pires", 2, [6, 7.5, 9]);
curso.addAluno("Carlos Nascimento", 5, [10, 7.5, 7.5]);

console.log(curso.resultadoAluno("Marcos Otani"));
console.log(curso.resultadoAluno("Renan Pires"));
console.log(curso.resultadoAluno("Carlos Nascimento"));

console.log(curso.resultados());