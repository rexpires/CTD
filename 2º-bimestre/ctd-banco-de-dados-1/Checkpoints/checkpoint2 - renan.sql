CREATE DATABASE IF NOT EXISTS checkpoint2;
USE checkpoint2;

CREATE TABLE alunos (
aluno_id int not null auto_increment primary key,
aluno_nome varchar(30),
aluno_sobrenome varchar(100),
aluno_datanascimento date
);

CREATE TABLE nutricionistas (
nutricionista_id int not null auto_increment primary key,
nutricionista_nome varchar(30),
nutricionista_sobrenome varchar(100)
);

CREATE TABLE modalidades (
modalidade_id int not null auto_increment primary key,
modalidade_nome varchar(30)
);

CREATE TABLE treinadores (
treinador_id int not null auto_increment primary key,
modalidade_id int,
treinador_nome varchar(30),
treinador_sobrenome varchar(100),
CONSTRAINT fk_treina_modalidade
	FOREIGN KEY (modalidade_id)
    REFERENCES modalidades(modalidade_id)
);

CREATE TABLE acompanhamentos (
acompanhamento_id int not null auto_increment primary key,
aluno_id int,
treinador_id int,
nutricionista_id int,
acompanhamento_objetivo varchar(30),
acompanhamento_treino text,
acompanhamento_nutricional text, 
CONSTRAINT fk_acomp_aluno
	FOREIGN KEY (aluno_id)
    REFERENCES alunos(aluno_id),
CONSTRAINT fk_acomp_treina
	FOREIGN KEY (treinador_id)
    REFERENCES treinadores(treinador_id),
CONSTRAINT fk_acomp_nutri
	FOREIGN KEY (nutricionista_id)
    REFERENCES nutricionistas(nutricionista_id)
);

INSERT INTO alunos (aluno_id, aluno_nome, aluno_sobrenome, aluno_datanascimento)
VALUES 	(1,'João','Neves','1997-06-17');

INSERT INTO alunos (aluno_id, aluno_nome, aluno_sobrenome, aluno_datanascimento)
VALUES 	(2,'Giovana','Bertoldo','1992-09-01');

INSERT INTO acompanhamentos (aluno_id, acompanhamento_objetivo, acompanhamento_treino, acompanhamento_nutricional)
VALUES 	(1,'Perda de peso','Treino HIIT e musculação','Dieta hipocalórica');

INSERT INTO acompanhamentos (aluno_id, acompanhamento_objetivo, acompanhamento_treino, acompanhamento_nutricional)
VALUES 	(2,'Ganho de massa','Musculação visando hipertrofia','Dieta hipercalórica');

INSERT INTO nutricionistas (nutricionista_id, nutricionista_nome, nutricionista_sobrenome)
VALUES 	(1,'Matheus','Barros');

INSERT INTO nutricionistas (nutricionista_id, nutricionista_nome, nutricionista_sobrenome)
VALUES 	(2,'Joana','Pereira');

SELECT aluno_nome, aluno_sobrenome, aluno_datanascimento
FROM alunos;

UPDATE alunos set aluno_sobrenome = 'Albuquerque'
WHERE aluno_sobrenome = 'Neves';

SELECT nutricionista_id, nutricionista_nome, nutricionista_sobrenome
FROM nutricionistas;

DELETE FROM nutricionistas WHERE nutricionista_sobrenome = 'Barros';

SELECT nutricionista_id, nutricionista_nome, nutricionista_sobrenome
FROM nutricionistas;

SELECT aluno_id, aluno_nome, aluno_sobrenome, aluno_datanascimento
FROM alunos;

SELECT a.aluno_id as Acompanhamentos, s.aluno_nome as Alunos
FROM acompanhamentos a
INNER JOIN alunos s
ON a.aluno_id = s.aluno_id;















