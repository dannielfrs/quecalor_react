# `QueCalor.com`. Consulta el clima de tu ciudad

Sitio web para consultar el estado del tiempo de tu ciudad

Antes de salir de casa consulta el estado del clima de tu ciudad para que no te agarre desprevenido. Consulta la temperatura actual, nubosidad, máximos y mínimos del dia, porcentaje de humedad, visibilidad, velocidad del viento, entre otros parametros.

## Tecnologias utilizadas

- React
- Redux
- Sass
- API's

## Modulos utilizados

- react
- react-icons
- react-redux
- react-router-dom
- redux
- redux-thunk
- sass
- @react-google-maps/api

## Busca tu ciudad

Para comenzar en el buscador introduce el nombre de tu ciudad, hay disponibles mas de 70 ciudades para consultar el estado del tiempo. El buscador cuenta con autocompletado para facilitar la busqueda.

![Busca tu ciudad](/src/assets/images/search.png "Buscador")


## Guarda tu ciudad

Haz clic en el botón "Guardar ubicación" para guardar la ciudad como predeterminada en el localstorage. La próxima vez que abras el sitio web se mostrara tu ciudad guardada. 

![Guarda tu ciudad](/src/assets/images/save_location.png "Guardar ubicación")


## Información del estado del tiempo

Gracias al uso de la API de openweathermap.org se obtiene información del clima de la ciudad buscada. La API proporciona información suficiente de las condiciones climatológicas actuales de dicha ciudad, dicha información incluye:

- Temperatura actual
- Temperatura máxima del dia
- Temperatura mínima del dia
- Nubosidad
- Sensación térmica
- Velocidad del viento
- Dirección del viento
- Porcentaje de humedad
- Visibilidad
- Presión atmosférica
- Hora de salida del sol
- Hora de la puesta de sol

![Estado del tiempo](/src/assets/images/weather.png "Estado del tiempo")


## Estado del tiempo para otras ciudades

Consulta además un resumen del estado del tiempo de otras ciudades sugeridas las cuales se muestran en un slideshow que cambia de forma automática.

![Estado del tiempo](/src/assets/images/suggested_weather.png "Estado del tiempo")


## Mapa

Gracias al uso de la API de Google Maps se muestra un mapa con la ubicación de la ciudad consultada y un cuadro informativo con la temperatura actual y la nubosidad. Tambien se muestra la temperatura de algunas otras ciudades aleatorias.

![Mapa](/src/assets/images/map.png "Mapa")


## Diseño responsivo

Se incluyen css media queries para generar un diseño adaptable a distintos tamaños de pantallas: escritorio, tablet o smartphone.

![Mapa](/src/assets/images/mobile_home.png "Mapa") ![Mapa](/src/assets/images/mobile_navbar.png "Mapa") ![Mapa](/src/assets/images/mobile_map.png "Mapa")


## Estado global con Redux

La aplicación maneja un estado global gestionado con Redux en el que se almacena la información del estado del tiempo  proveniente de la API de openweathermap.org.