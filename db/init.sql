CREATE DATABASE IF NOT EXISTS estudiantes;
USE estudiantes;

CREATE TABLE IF NOT EXISTS estudiantes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  nombre   VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  nota1 DECIMAL(4,2),
  nota2 DECIMAL(4,2),
  nota3 DECIMAL(4,2)
);

-- Usuario de prueba
INSERT INTO estudiantes (username, password, nombre, apellido, nota1, nota2, nota3)
VALUES ('andrea', '1234', 'Andrea', 'Garay', 4.5, 4.0, 5.0);
