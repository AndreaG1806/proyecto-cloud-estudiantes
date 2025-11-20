# Aplicación de Estudiantes - Computación en la Nube

Esta aplicación permite que un estudiante inicie sesión con usuario y contraseña
y vea su nombre, apellido y 3 notas, que se obtienen desde una base de datos MySQL.

## Arquitectura

La solución está desplegada en una arquitectura de tres capas usando Docker:

- **Capa de presentación (cliente)**: navegador web del usuario.
- **Servidor de aplicaciones**: contenedor `app` con Node.js + Express + EJS.
- **Servidor de base de datos**: contenedor `db` con MySQL.

Comunicación:

- El navegador se conecta al servidor de aplicaciones por HTTP en el puerto **3000**.
- El servidor de aplicaciones se conecta a la base de datos MySQL por el puerto **3306**
  usando el nombre de host `db` dentro de la red de Docker.

```mermaid
graph TD
  A["Navegador Web<br/>http://localhost:3000"] -->|HTTP (3000)| B["Servidor de Aplicaciones<br/>Node.js + Express<br/>Contenedor: app"]
  B -->|MySQL TCP (3306)| C["Servidor de Base de Datos<br/>MySQL 8.0<br/>Contenedor: db"]
