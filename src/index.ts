import "./styles.css";
/**
• El DT de los infantiles del equipo de fútbol desea
  saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las
  edades son cargadas al azar (use la función
  aleatorio(menorValor, mayorValor), es decir
  aleatorio(3,7))
• Muestre todas las edades y el promedio de las
  mismas
 */

function edades(cantJugadores: number) {
  let jugadores: number[] = Array(cantJugadores);
  let suma: number = 0;
  for (let i = 0; i < cantJugadores; i++) {
    jugadores[i] = Math.round(Math.random() * (7 - 3) + 3);
    suma = suma + jugadores[i];
    let promedio = suma / cantJugadores;
  }
  console.log("Edad de jugadores: " + jugadores);
  console.log("Promedio de edades: " + promedio);
}

let jugadores: number = 5;

edades(jugadores);
