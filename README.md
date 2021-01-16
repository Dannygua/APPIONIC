# CHAT DE IONIC CON IMAGENES EN REACT Y FIREBASE



## EJECUCION DEL PROYECTO

Se puede ejecutar con:
npm start

### Métodos y Explicación

En el documento existen 3 archivos, los cuales ejecutaran los métodos para poner en funcionamiento el Chat y la subida de imagenes

## App

El App cuenta con los métodos Chat y FileUpdate, es en donde todos los componentes se reúnen y se muestran

### Métodos de App

componentWillMount()

Es el conocido como ciclo de vida, en el cual se actualizarán variables cada vez que se ejecute un cambio, por lo cual aquí se encuentra el estado del usuario y el array de imágenes, que estarán en contante cambio

handleAuth()

Aquí se encuentra la autenticación con Google, mediante la cual se podrá acceder al contenido de la app, si el usuario se Logea con una cuenta de Google existente

handleLogout()

Aquí se implementa el método singOut de firebase, el cual cerrara la sesión del usuario y le negara el acceso a menos que use el login de Google

handleUpload ()

En este método ocurren varias cosas 
en primer lugar se accede al fichero fotos de la storage de firebase, para poder ingresar las imágenes que el usuario ingrese en el chat, después de eso se presenta un componente para calcular el porcentaje subido de la imagen, y una última función que trae el archivo hacia el chat, y lo muestra al usuario.

Finalmente se pasa la información de la imagen a el storage y al real time database de firebase

renderLoginButton()

En este método se decide que es lo que se debe mostrar, al usuario, dependiendo si se encuentra logeado o no, en el caso de estar logeado se mostrara el chat y las imágenes compartidos en la aplicación, en el caso de no tener autorización, simplemente se mostrara el botón para logearse con Google


## Chat

El chat es un componente, encargado de contener todas las funciones necesarias para acceder a los datos de firebase y poder ejecutar debidamente el chat

### Métodos de Chat

componentDidMount()

Este método es el ciclo de vida de react, por aquí se actualizarán las variables que se cambien en la ejecución

handleSubmit ()

En este método se ingresa la información de los mensajes que se escribieron el chat, de tal modo que se ingresen en la Real Time Database de Firebase, junto con el usuario que las envió

## FileUpdate

FileUpload es un componente que se encarga de contener el formulario del chat, en el cual se subirán imágenes a firebase, los métodos de FileUpload se encuentran en App, debido a la comodidad que presenta trabajar en el archivo principal


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
