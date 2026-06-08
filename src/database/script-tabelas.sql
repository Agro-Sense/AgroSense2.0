create database agroSense;
use agroSense;


create table usuario(
id int primary key auto_increment,
nome varchar(50)not null, 
cpf char(11) not null,
telefone char(11) not null,
email varchar(50) not null unique,
senha varchar(30),
data_cadastro datetime default current_timestamp()
);

create table cliente (
id int primary key auto_increment,
nome varchar(50) not null,
cnpj char (14) not null,
cep char(8) not null,
complemento varchar(45) not null,
fkUsuario int unique,
constraint fk_usu_cliente foreign key (fkUsuario)
  references usuario(id)
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


create table fale_conosco (
id_fale_conosco int auto_increment primary key,
nome varchar(100) not null,
email varchar(150) not null,
mensagem text not null
);

INSERT INTO usuario (nome, cpf, telefone, email, senha) VALUES
('José da Silva', '12334567840', '11999999999','jose@novosmorangos.com', 'AmoMorangos@1');


INSERT INTO cliente (nome, cnpj, cep, complemento, fkUsuario) VALUES
('Novos Morangos', '45290600000100', '13010000', 'Galpão A');

INSERT INTO plantacao (tamanho_hectares, fkCliente) VALUES
(10, 1);

INSERT INTO sensor (localizacao, sts, fkPlantacao) VALUES
('Estufa A - Linha 1', TRUE, 1);

INSERT INTO captura (data_horario_medicao, valor, fkSensor) VALUES
('2026-05-30 06:12:45', 72.50, 1),
('2026-05-30 08:37:19', 68.30, 1),
('2026-05-30 11:05:52', 55.10, 1),
('2026-05-30 14:48:27', 80.00, 1),
('2026-05-30 17:23:11', 61.75, 1);

delete from cliente where id = 10;

SET lc_time_names = 'pt_BR';

select*from fale_conosco;
select*from usuario;
select*from cliente;
select*from plantacao;
select*from sensor;
select*from captura;


CREATE VIEW vw_grafico1 AS
SELECT
p.fkCliente,
TIME(c.data_horario_medicao) AS horario,
c.valor
FROM captura c
JOIN sensor s ON c.fkSensor = s.id
JOIN plantacao p ON s.fkPlantacao = p.id limit 10;
select * from vw_grafico1;

-- select do grafico 2
CREATE VIEW vw_grafico2 AS
SELECT p.fkCliente,
SUM(CASE WHEN c.valor < 65 THEN 1 ELSE 0 END) AS seco,
SUM(CASE WHEN c.valor BETWEEN 65 AND 75 THEN 1 ELSE 0 END) AS ideal,
SUM(CASE WHEN c.valor > 75 THEN 1 ELSE 0 END) AS umido
FROM captura c
JOIN sensor s ON c.fkSensor = s.id
JOIN plantacao p ON s.fkPlantacao = p.id
group by p.fkCliente;

SELECT * FROM vw_grafico2;

-- select do grafico 3
CREATE VIEW vw_grafico3 AS
SELECT
p.fkCliente,
SUM(CASE WHEN s.sts= TRUE THEN 1 ELSE 0 END) AS ativos,
SUM(CASE WHEN s.sts = FALSE THEN 1 ELSE 0 END) AS inativos
FROM sensor s
JOIN plantacao p ON s.fkPlantacao = p.id
group by p.fkCliente;

select * from vw_grafico3;

-- select do grafico 4
CREATE VIEW vw_grafico4 AS
SELECT
p.fkCliente,
DATE(c.data_horario_medicao) AS mes,
TIME(c.data_horario_medicao) AS nomeMes,
AVG(c.valor) AS mediaUmidade
FROM captura c
JOIN sensor s ON c.fkSensor = s.id
JOIN plantacao p ON s.fkPlantacao = p.id
GROUP BY mes, nomeMes, p.fkCliente
ORDER BY mes;

select * from vw_grafico4;


-- select da kpi1
CREATE VIEW vw_kpi1 AS
 SELECT
 p.fkCliente,
    MAX(c.valor) AS maiorUmidade,
    MIN(c.valor) AS menorUmidade
    FROM captura c
    JOIN sensor s ON c.fkSensor = s.id
    JOIN plantacao p ON s.fkPlantacao = p.id
    group by p.fkCliente;
    
    
SELECT * FROM vw_kpi1;
    
-- select da kpi2
CREATE VIEW vw_kpi2 AS
 SELECT p.fkCliente,
 COUNT(*) AS totalBaixas
    FROM captura c
    JOIN sensor s ON c.fkSensor = s.id
    JOIN plantacao p ON s.fkPlantacao = p.id
    AND valor < 65 
    group by p.fkCliente;
    
    SELECT * FROM vw_kpi2;
    
-- select da kpi3
CREATE VIEW vw_kpi3 AS
SELECT p.fkCliente, s.id, sts
    FROM sensor s
    JOIN plantacao p ON s.fkPlantacao = p.id where s.sts = FALSE;
    select * FROM vw_kpi3;
    
-- select da kpi4
CREATE VIEW vw_kpi4 AS
SELECT
p.fkCliente,
CASE MONTH(c.data_horario_medicao)
  WHEN 1 THEN 'Janeiro'
  WHEN 2 THEN 'Fevereiro'
  WHEN 3 THEN 'Março'
  WHEN 4 THEN 'Abril'
  WHEN 5 THEN 'Maio'
  WHEN 6 THEN 'Junho'
  WHEN 7 THEN 'Julho'
  WHEN 8 THEN 'Agosto'
  WHEN 9 THEN 'Setembro'
  WHEN 10 THEN 'Outubro'
  WHEN 11 THEN 'Novembro'
  WHEN 12 THEN 'Dezembro'
END AS nomeMes,
AVG(c.valor) AS mediaUmidade
FROM captura c
JOIN sensor s ON c.fkSensor = s.id
JOIN plantacao p ON s.fkPlantacao = p.id
GROUP BY nomeMes, p.fkCliente
ORDER BY mediaUmidade DESC
LIMIT 1;

SELECT * FROM vw_kpi4;

-- select da kpi5
CREATE VIEW vw_kpi5 AS
SELECT
CASE MONTH(c.data_horario_medicao)
  WHEN 1 THEN 'Janeiro'
  WHEN 2 THEN 'Fevereiro'
  WHEN 3 THEN 'Março'
  WHEN 4 THEN 'Abril'
  WHEN 5 THEN 'Maio'
  WHEN 6 THEN 'Junho'
  WHEN 7 THEN 'Julho'
  WHEN 8 THEN 'Agosto'
  WHEN 9 THEN 'Setembro'
  WHEN 10 THEN 'Outubro'
  WHEN 11 THEN 'Novembro'
  WHEN 12 THEN 'Dezembro'
END AS nomeMes,
AVG(c.valor) AS mediaUmidade
FROM captura c
JOIN sensor s ON c.fkSensor = s.id
JOIN plantacao p ON s.fkPlantacao = p.id
GROUP BY nomeMes
ORDER BY mediaUmidade DESC
LIMIT 1;

