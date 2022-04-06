# Colores hex 
Este projecto nos permite obtener el valor hex de un color dado por la paleta de colores predeterminada o dado por valores random
## Simple

Nos permite obtener colores hex de una paleta de predefinida
  - Para esto se utilza un array con los valores de la paleta de colores 
  - Luego se utiliza el primer valor de la paleta de colores como backgorun del body y de los botones del nav
  - Para continuar con el siguiente color, retiramos elm primer elemeto del array y lo colocamos al fondo del mismo. De esta forma obtendremos el siguiente color

## Random

Nos permite obtener colores hex de manera random
  - Para esto se utiliza:
    - Una funcion que crea un numero del 0 a 9 de manera random
    - Una funcion que crea una letra de la A hasta la F
    - Una funcion que crea un numero entre 0 o 1, el cual se utiliza para optar si el siguiente elemento del hex es una letra o un numeor
      - 0 = letra
      - 1 = Numero
    -  Luego a travez de un for de 6 bucles se rea el hex llamando a alguna de las funciones que nos otorgan letra o numero random
  - Una vez se obtiene el hex random, se modifica los estilos del background del body y de los botones del nav