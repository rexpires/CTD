CREATE DATABASE IF NOT EXISTS DHTube;
USE DHTube;

CREATE TABLE avatar (
idAvatar int not null auto_increment primary key,
nome varchar(45),
urlimagem varchar(100)
);

CREATE TABLE pais (
idPais int not null auto_increment primary key,
nome varchar(100)
);

CREATE TABLE usuario (
idUsuario int not null auto_increment primary key,
idPais int,
idAvatar int,
nome varchar(45),
email varchar(45),
senha varchar(45),
dataNascimento datetime,
cep varchar(45),
CONSTRAINT fk_usu_pais
	FOREIGN KEY (idPais)
    REFERENCES pais(idPais),
CONSTRAINT fk_usu_avatar
	FOREIGN KEY (idAvatar)
    REFERENCES avatar(idAvatar)
);

CREATE TABLE playlist (
idPlaylist int not null auto_increment primary key,
idUsuario int,
nome varchar(45),
dataCriacao datetime,
privado smallint,
CONSTRAINT fk_play_usu
	FOREIGN KEY (idUsuario)
    REFERENCES usuario(idUsuario)
);

CREATE TABLE canal (
idCanal int not null auto_increment primary key,
idUsuario int,
nome varchar(45),
descricao text,
dataCriacao datetime,
CONSTRAINT fk_canal_usu
	FOREIGN KEY (idUsuario)
    REFERENCES usuario(idUsuario)
);

CREATE TABLE video (
idVideo int not null auto_increment primary key,
idUsuario int,
titulo varchar(100),
descricao text,
tamanho double,
nomeArquivo varchar(100),
duracao double,
imagem varchar(100),
qtdReproducoes int,
qtdLikes int,
qtdDeslikes int,
privado smallint,
dataPublicacao datetime,
CONSTRAINT fk_vid_usu
	FOREIGN KEY (idUsuario)
    REFERENCES usuario(idUsuario)
);

CREATE TABLE playlist_video (
idVideo int,
idPlaylist int,
CONSTRAINT fk_plvi_vid
	FOREIGN KEY (idVideo)
    REFERENCES video(idVideo),
CONSTRAINT fk_plvi_play
	FOREIGN KEY (idPlaylist)
    REFERENCES playlist(idPlaylist)
);


