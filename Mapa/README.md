# CRM  
Aplicación de CRM con el uso de tecnologias como auth0, node.js, npm.

## Instalación  
### 1. Configuración del entorno
#### 1.Instalación de Node.js y npm
#### 2.Creación de la Aplicación React
    npx create-react-app crm para crear el proyecto.
#### 3.Instalación de dependencias
    npm install primeicons para los iconos.   
    npm install @auth0/auth0-react para autenticación de usuarios mediante login.  
    npm install primereact para el uso de componentes como sidebar y topbar.
    npm i react-router-dom para navegación a traves de la aplicación. 
## Desarrollo
### 1. Login
    Se crea la carpeta de Login con su css y js respectivo esta parte incluira un fondo de pantalla, un mensaje de bienvenida para el usuario y un boton que mandara al login que nos brinda Auth0 donde el usuario podra registrarse o loguearse.
#### 1. Auth0
    Se crea una cuenta en Auth0, despues se crea una Single Page Application, se modifican las URLs en este caso poniendo http://localhost:3000/, en el index.js se coloca el domain y el clientId.
### 2. Logout
    Se crea la carpeta de Logout con su js respectivo, el cual nos dara el boton para poder regresar al Login.
### 3. Topbar
    Se crea la carpeta de Topbar con su respectivo css y js, aqui tendremos el boton del sidebar, el boton de logout, al igual que un saludo para el usuario y su foto de perfil.
### 4. Sidebar
    Se crea la carpeta de Sidebar con su respectivo css y js, aqui se tendra el logo de la empresa, el nombre de la empresa, y el menu del sidebar que incluye los respectivos logos de las opciones, para este componente se hizo uso de primereact.



