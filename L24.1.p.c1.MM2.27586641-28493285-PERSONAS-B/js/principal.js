/*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
reporte al final la edad promedio y la edad mayor entre las mujeres.

Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida

presenta el siguiente formato:
Edad promedio: 18.50
Edad mayor entre las mujeres: 19
*/

import Cl_Persona from "./personas.js";
import Cl_calculos from "./calculos.js";

let persona1 = new Cl_Persona ("luis",15, "M");
let persona2 = new Cl_Persona ("Ana", 19, "F");
let persona3 = new Cl_Persona ("Jose", 21, "M");
let persona4 = new Cl_Persona ("Carmen", 17, "F");
let persona5 = new Cl_Persona ("Rosa", 18, "F");
let persona6 = new Cl_Persona ("Jose", 22, "M");
let persona7 = new Cl_Persona ("Maria", 17, "F");
let persona8 = new Cl_Persona ("Luz", 19, "F");
let persona9 = new Cl_Persona ("Rafael", 23, "M");
let persona10 = new Cl_Persona ("Liz", 15, "F");
let persona11 = new Cl_Persona ("Marcos", 20, "M");
let persona12 = new Cl_Persona ("leo", 16, "M");

let calculos = new Cl_calculos
calculos.procesarpersonas(persona1);
calculos.procesarpersonas(persona2);
calculos.procesarpersonas(persona3);
calculos.procesarpersonas(persona4);
calculos.procesarpersonas(persona5);
calculos.procesarpersonas(persona6);
calculos.procesarpersonas(persona7);
calculos.procesarpersonas(persona8);
calculos.procesarpersonas(persona9);
calculos.procesarpersonas(persona10);
calculos.procesarpersonas(persona11);
calculos.procesarpersonas(persona12);

let salida = document.getElementById("salida");
salida.innerHTML = "Resultados"
salida.innerHTML += '<br>edad promedio ' +calculos.edadpromedio();
salida.innerHTML += '<br>edad mayor entre las mujeres ' +calculos.calcularedadmayormujeres();

