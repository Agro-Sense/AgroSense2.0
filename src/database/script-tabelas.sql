create database agroSense;
use agroSense;


create table cliente (
id int primary key auto_increment,
nome varchar(50) not null,
cnpj char (14) not null,
cep char(8) not null,
complemento varchar(45) not null
);

create table usuario(
id int primary key auto_increment,
nome varchar(50)not null, 
cpf char(11) not null,
telefone char(11) not null,
email varchar(50) not null,
senha varchar(30),
data_cadastro datetime default current_timestamp(),
fkCliente int,
constraint fk_usu_cliente foreign key (fkCliente)
  references cliente(id)
);

create table plantacao (
id int primary key auto_increment,
tamanho_hectares int not null,
fkCliente int, constraint fkClienteInfoPlantacao foreign key (fkCliente) references cliente(id)
);

create table sensor (
id int primary key auto_increment,
localizacao varchar(100),
sts bool,
fkPlantacao int, constraint fkPlantacaoSensor foreign key (fkPlantacao) references plantacao(id)
);

create table captura (
id int auto_increment,
data_horario_medicao datetime default current_timestamp(),
valor decimal (5,2),
fkSensor int, 
constraint pksensor_captura primary key (id, fkSensor),
constraint fkSensorDados foreign key (fkSensor) references sensor(id)
);