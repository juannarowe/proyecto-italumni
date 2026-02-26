ITAlumni - Red de Exalumnos

Una plataforma web profesional diseñada para la gestión y visualización de una red de exalumnos (IT Academy). Permite explorar perfiles de graduados, consultar eventos y ofertas de trabajo, todo bajo una arquitectura modular, robusta y escalable.


Demo




Instalación

Clona el repositorio e instala las dependencias utilizando npm (o el gestor que prefieras):

Bash
git clone https://github.com/tu-usuario/proyecto-italumni.git
cd proyecto-italumni
npm install


Uso

Para iniciar el servidor de desarrollo con Vite:

Bash
npm run dev
La aplicación estará disponible en http://localhost:5173.

Para generar el archivo de estilos de Tailwind (el output.css que pidió el revisor):

Bash
npx tailwindcss -i ./src/styles/tailwind/tailwind.input.css -o ./src/styles/output.css --watch

Para compilar el proyecto para producción:

Bash
npm run build


✨ Características

Gestión de Alumni: Visualización dinámica de perfiles de exalumnos cargados desde JSON.
Arquitectura Agnóstica: Sistema de carga de datos (DataManager) preparado para consumir cualquier API o archivo local sin modificar la lógica principal.
Diseño Modular: Separación clara por funcionalidades (Features) para facilitar el mantenimiento.
Configuración Centralizada: URLs y constantes del proyecto gestionadas desde un único punto (api.config.ts).
Responsive Design: Interfaz adaptativa construida íntegramente con Tailwind CSS.
Tipado Estricto: Uso total de TypeScript para garantizar la seguridad de los datos y evitar errores en tiempo de ejecución.


Tech Stack

Tecnología
Propósito
Vite
Herramienta de construcción y servidor de desarrollo
TypeScript
Lenguaje de programación principal
Tailwind CSS
Framework de estilos de utilidad
PostCSS
Procesador de CSS
JSON
Almacenamiento de datos de prueba


📁 Estructura del Proyecto

├── features/                # Módulos por funcionalidad
│   └── alumni/              # Feature de Alumnos
│       ├── scripts/         # Lógica (AlumniManager, AlumniUI)
│       ├── types/           # Interfaces de TypeScript
│       ├── alumni.css       # Estilos específicos
│       └── alumniView.html  # Template de la funcionalidad
├── scripts/                 # Utilidades globales y DataManager
│   ├── dataManager.ts       # Consumo de API genérico (agnóstico)
│   └── utils.ts             # Funciones auxiliares
├── styles/                  # Estilos globales
│   ├── tailwind/            # Archivos de entrada de Tailwind
│   └── output.css           # CSS generado automáticamente
└── main.ts                  # Punto de entrada de la aplicación


💡 Lógica de Datos

El proyecto utiliza un patrón de DataManager Genérico. Esto permite que la función getData<T>(url) pueda recibir cualquier interfaz (Alumni, Event, Job) y devolver los datos tipados correctamente:
```TypeScript
// Ejemplo de uso agnóstico
const alumnos = await dataManager.getData<Alumnus>(API_CONFIG.ALUMNI);
```
🙌 Créditos
Desarrollado como proyecto para IT Academy utilizando TypeScript, Vite y Tailwind CSS.
