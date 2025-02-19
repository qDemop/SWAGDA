# Login con Supabase y Vite

Este proyecto es una aplicación web que implementa un sistema de login utilizando **Supabase** como backend y **Vite** como entorno de desarrollo.

## Instalación

Para ejecutar el proyecto, asegúrate de tener instalado **Node.js** y luego ejecuta los siguientes comandos:

```sh
# Instalar dependencias
npm install

# Iniciar el servidor en desarrollo
npm run dev
```

## Dependencias

Estas son las principales dependencias utilizadas en el proyecto:

### Dependencias principales:
- `@chakra-ui/alert`: ^2.2.2    
- `@chakra-ui/form-control`: ^2.2.0 
- `@chakra-ui/layout`: ^2.3.1
- `@chakra-ui/react`: ^3.7.0
- `@emotion/react`: ^11.14.0
- `@emotion/styled`: ^11.14.0
- `@hookform/resolvers`: ^3.10.0
- `@supabase/supabase-js`: ^2.48.1
- `framer-motion`: ^12.1.0
- `lucide-react`: ^0.475.0 / npm install lucide-react
- `next-themes`: ^0.4.4
- `prop-types`: ^15.8.1
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-hook-form`: ^7.54.2 / npm install react-hook-form
- `react-icons`: ^5.4.0
- `react-router-dom`: ^7.1.5
- `zod`: ^3.24.1  / npm install zod

### Dependencias de desarrollo:
- `@eslint/js`: ^9.17.0
- `@types/react`: ^18.3.18
- `@types/react-dom`: ^18.3.5
- `@vitejs/plugin-react`: ^4.3.4
- `eslint`: ^9.17.0
- `eslint-plugin-react`: ^7.37.2
- `eslint-plugin-react-hooks`: ^5.0.0
- `eslint-plugin-react-refresh`: ^0.4.16
- `globals`: ^15.14.0
- `vite`: ^6.0.5
- `vite-tsconfig-paths`: ^5.1.4 / npm install -D vite-tsconfig-paths

## Scripts disponibles

Puedes ejecutar estos comandos para interactuar con el proyecto:

- `dev`: vite
- `build`: vite build
- `lint`: eslint .
- `preview`: vite preview

## Archivos necesarios

Para que el proyecto funcione correctamente, asegúrate de que los siguientes archivos existan:

- `.env` → Contiene las credenciales de Supabase.
- `index.html` → Página principal de la aplicación.
- `vite.config.js` → Configuración de Vite.
- `package.json` → Contiene la configuración del proyecto y sus dependencias.

## Notas

en caso no funcionar algunas dependencias de chakra ui ir a su pagina de documentacion y buscar segun al componente que no este funcionando.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
