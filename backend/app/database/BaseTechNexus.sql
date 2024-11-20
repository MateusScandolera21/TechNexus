CREATE TABLE tipo_cadastro (
    id serial PRIMARY KEY
   ,nome varchar(150) NOT NULL -- Define um nome descritivo, como "Prestador de Serviços"
);

CREATE TABLE usuarios (
    id serial PRIMARY KEY
   ,nome varchar(150) NOT NULL
   ,email varchar(200) NOT NULL
   ,senha varchar(16) NOT NULL
   ,tipo_cadastro_id int NOT NULL -- Referencia a tabela tipo_cadastro
   ,CONSTRAINT fk_tipo_cadastro FOREIGN KEY (tipo_cadastro_id)
       REFERENCES tipo_cadastro (id) ON DELETE CASCADE
);

-- Inserindo dados na tabela tipo_cadastro
INSERT INTO tipo_cadastro (nome) VALUES ('Prestador de Serviços'), ('Cliente');

-- Inserindo dados na tabela usuarios
INSERT INTO usuarios (nome, email, senha, tipo_cadastro_id) VALUES ('Alberto', 'testeemail@gmail.com', '1q2w3e4r@', 1); -- Supondo que o tipo 1 é "Prestador de Serviços"

SELECT
    u.nome AS usuario_nome
   ,u.email
   ,tc.nome AS tipo_cadastro_nome
FROM usuarios u
INNER JOIN tipo_cadastro tc ON u.tipo_cadastro_id = tc.id;

 