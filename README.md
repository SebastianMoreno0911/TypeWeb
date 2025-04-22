# React + TypeScript + Vite

En este ejercicio se usó **Vite + TypeScript**, como práctica para el desarrollo de interfaces web, tests unitarios y consumo de una API.

---
# Al clonar el repositorio:
## Acomodar el Archivo .env
1. En la ruta \src\API\.env:
   Colocas los datos reales para el API
2. Instalar Biblioteca **dotenv**:
   ````bash
   npm install dotenv
3. Configura dotenv en tu aplicación:
   Importa y configura dotenv en el archivo de entrada principal de tu aplicación (por ejemplo, index.ts o App.tsx)
   ````bash
   import dotenv from "dotenv";
   dotenv.config();

**IMPORTANTE**
> Si lo hace de esta manera dejarlo como estan las variables de Login.tsx

## **SI NO SE HACE ASI, PUEDE CAMBIAR LOS DATOS REALES EN LOGIN.TSX**
````bash
EXPO_PUBLIC_CLIENT_ID= 12345-asdfgh
EXPO_PUBLIC_CLIENT_SECRET= 12345-asdfghj
EXPO_PUBLIC_GRANT_TYPE= password
EXPO_PUBLIC_USERNAME= asdfgh@test.com
EXPO_PUBLIC_PASSWORD= 123456fdsa
````

## 📡 Consumir API

Se utilizó la librería **Axios** para realizar las peticiones HTTP:
  ````bash
import axios from 'axios';
````
## ⚙️ Crear Proyecto con Vite
Si quieres crear un proyecto similar desde cero, puedes seguir estos pasos:

1. Asegúrate de tener Node.js instalado (preferiblemente la última versión LTS).
   
2. Abre tu terminal y ejecuta el siguiente comando:
   ```bash
   npm create vite@latest

3. Especifica el nombre del proyecto y selecciona las siguientes opciones cuando se te pregunte:

   **Framework**: React

   **Variant**: TypeScript

5. Luego navega al directorio del proyecto:
   ````bash
   cd nombre-del-proyecto
6. Instala las dependencias:
   ````bash
   npm install
7. Inicia el proyecto en modo desarrollo:
   ````bash
   npm run dev
  Esto levantará un servidor local, usualmente en:
👉 http://localhost:5173/

   
