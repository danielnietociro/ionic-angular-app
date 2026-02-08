# Ionic Angular App

Esta es una aplicación híbrida desarrollada con Ionic y Angular, utilizando Capacitor para la compilación nativa en Android e iOS.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (viene incluido con Node.js)
- [Ionic CLI](https://ionicframework.com/docs/cli): `npm install -g @ionic/cli`
- [Cordova](https://cordova.apache.org/): `npm install -g cordova`
- Para Android:
  - [Android Studio](https://developer.android.com/studio)
  - [Java Development Kit (JDK)](https://adoptium.net/) (versión 11 o superior)
  - Configurar variables de entorno ANDROID_HOME y JAVA_HOME
- Para iOS:
  - macOS con Xcode instalado
  - [CocoaPods](https://cocoapods.org/) (solo para macOS): `sudo gem install cocoapods`

## Instalación de Dependencias

1. Clona este repositorio o descarga los archivos.
2. Navega al directorio del proyecto:
   ```
   cd ionic-angular-app
   ```
3. Instala las dependencias de npm:
   ```
   npm install
   ```

## Compilación y Ejecución

### Desarrollo Local (Web)

Para ejecutar la aplicación en el navegador durante el desarrollo:

```
npm start
```

O usando Ionic CLI:

```
ionic serve
```

### Compilación para Producción

Para construir la aplicación web optimizada:

```
npm run build
```

O usando Ionic CLI:

```
ionic build
```

### Compilación para Android

1. Agrega la plataforma Android (si no está agregada):
   ```
   ionic cordova platform add android
   ```

2. Construye la aplicación web:
   ```
   npm run build
   ```

3. Construye la aplicación para Android:
   ```
   ionic cordova build android
   ```
   O usando Angular CLI:
   ```
   ng run app:ionic-cordova-build --configuration=production
   ```

4. Ejecuta en dispositivo o emulador:
   ```
   ionic cordova run android
   ```

5. O abre el proyecto en Android Studio para desarrollo avanzado:
   ```
   ionic cordova prepare android
   ```
   Luego abre `platforms/android` en Android Studio.

### Compilación para iOS

1. Agrega la plataforma iOS (si no está agregada):
   ```
   ionic cordova platform add ios
   ```

2. Construye la aplicación web:
   ```
   npm run build
   ```

3. Construye la aplicación para iOS:
   ```
   ionic cordova build ios
   ```

4. Ejecuta en dispositivo o simulador:
   ```
   ionic cordova run ios
   ```

5. O abre el proyecto en Xcode para desarrollo avanzado:
   ```
   ionic cordova prepare ios
   ```
   Luego abre `platforms/ios` en Xcode.

## Comandos Útiles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm run build`: Construye la aplicación para producción
- `ionic cordova platform add android`: Agrega plataforma Android
- `ionic cordova platform add ios`: Agrega plataforma iOS
- `ionic cordova build android`: Construye para Android
- `ionic cordova build ios`: Construye para iOS
- `ionic cordova run android`: Ejecuta en Android
- `ionic cordova run ios`: Ejecuta en iOS
- `ionic cordova prepare`: Prepara todas las plataformas

## Solución de Problemas

### Android
- Asegúrate de que las variables de entorno ANDROID_HOME y JAVA_HOME estén configuradas correctamente
- Verifica que tengas instalado el Android SDK y las herramientas de compilación
- Si hay problemas con Gradle, limpia el caché: `./gradlew clean` en el directorio android

### iOS
- Asegúrate de tener Xcode actualizado
- Instala CocoaPods si es necesario: `sudo gem install cocoapods`
- Ejecuta `pod install` en el directorio ios si hay problemas con dependencias

## Estructura del Proyecto

```
src/
├── app/                 # Componentes principales de la aplicación
├── assets/              # Recursos estáticos (imágenes, iconos, etc.)
├── environments/        # Configuraciones de entorno
└── theme/               # Estilos y variables de tema

platforms/android/        # Proyecto nativo Android (generado por Cordova)
platforms/ios/            # Proyecto nativo iOS (generado por Cordova)
www/                     # Build de producción (generado automáticamente)
```

## Contribución

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Realiza tus cambios y commits
3. Sube tu rama: `git push origin feature/nueva-funcionalidad`
4. Crea un Pull Request

## Cambios Realizados

Durante el desarrollo de esta aplicación híbrida, se realizaron los siguientes cambios y implementaciones:

### Integración con Firebase
- **Configuración de Firebase**: Se configuró Firebase en el proyecto utilizando AngularFire. Se creó el archivo `src/environments/firebase.config.ts` para almacenar la configuración de Firebase (API key, auth domain, etc.).
- **Módulos de Firebase**: Se importaron y configuraron los módulos `AngularFireModule` y `AngularFireRemoteConfigModule` en `src/app/app.module.ts` para habilitar la autenticación, base de datos y configuración remota.

### Servicios Implementados
- **Servicio de Configuración Remota**: Se creó el servicio `RemoteConfigService` en `src/app/services/remote-config.service.ts` para gestionar la configuración remota de Firebase. Este servicio permite obtener valores de configuración de forma asíncrona y actualizar la aplicación dinámicamente sin necesidad de nuevas versiones.

### Navegación y Páginas
- **Navegación por Tabs**: Se implementó un sistema de navegación por pestañas utilizando Ionic Tabs. La página principal `src/app/tabs/tabs.page.html` contiene las pestañas, y se creó la página `src/app/tab1/tab1.page.ts` como ejemplo de contenido en una pestaña.
- **Componentes de Ionic**: Se utilizaron componentes de Ionic como `ion-tabs`, `ion-tab-bar`, `ion-tab-button` para una experiencia de usuario intuitiva y nativa.

### Configuración del Proyecto
- **Cordova**: Se configuró cordoba para el desarrollo híbrido, permitiendo la compilación nativa para Android e iOS.
- **Dependencias**: Se agregaron dependencias como `@angular/fire` para Firebase, y se configuraron los scripts de npm para desarrollo y producción.

### Mejoras Adicionales
- **Experiencia de Usuario**: La aplicación ofrece una interfaz intuitiva con navegación sensilla, compatible con dispositivos móviles y web.
- **Rendimiento**: Se optimizó el manejo de datos con servicios asíncronos y configuración remota para actualizaciones en tiempo real.
- **Versionamiento y Configuración en la Nube**: Se implementó Git para versionamiento y Firebase para configuración en la nube, permitiendo despliegues continuos y actualizaciones remotas.

### descarga aplicacion demo:
- **https://drive.google.com/file/d/1i7XLqloLh25UGj-IDH1yWNos26CtPUDz/view**

### Imagenes app funcional demo:
- **Inicio Aplicacion**:
- **<img width="382" height="826" alt="image" src="https://github.com/user-attachments/assets/262a253a-63f6-4d68-9e96-184ab2b1ad38" />**

- **Crear Task**:
- **<img width="368" height="848" alt="image" src="https://github.com/user-attachments/assets/0eabf439-039f-4ad4-ba82-8407a5404e31" />**
- **<img width="367" height="816" alt="image" src="https://github.com/user-attachments/assets/e902ea20-9127-4389-9e20-00c845ce8829" />**
- **Editar Task**:
**<img width="387" height="820" alt="image" src="https://github.com/user-attachments/assets/7e749b76-7a69-4257-a0f6-fec850c77439" />**
**<img width="388" height="844" alt="image" src="https://github.com/user-attachments/assets/4800c068-fca6-49c0-99a8-8cf5150b442a" />**
**<img width="384" height="823" alt="image" src="https://github.com/user-attachments/assets/b54cdb2d-ecd8-432a-a909-9ba9d2915e1c" />**
- **Eliminar task**:
- **<img width="383" height="833" alt="image" src="https://github.com/user-attachments/assets/24322fdd-b538-4856-88f0-57a4dbcc683a" />**
- **<img width="374" height="796" alt="image" src="https://github.com/user-attachments/assets/a5e9ebb6-0c3e-4c01-9591-c8b24ced8fb8" />**
- **Marcar como completa**:
- **<img width="374" height="827" alt="image" src="https://github.com/user-attachments/assets/6413e13f-a634-4297-8574-206340204db4" />**
- **Habilitar de nuevo**:
- **<img width="387" height="829" alt="image" src="https://github.com/user-attachments/assets/bcf3d98b-f4a4-4749-9b6f-660cfec973ea" />**









