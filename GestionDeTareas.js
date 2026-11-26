// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
    {nombre: "Ir a la playa", prioridad: 1, completada: false},
    {nombre: "Estudiar JS", prioridad: 2, completada: true},
    {nombre: "Ver películas", prioridad: 3, completada: false}
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log("Nombre de la tarea: " + lista[i].nombre + ", Estado: " + (lista[i].completada ? "Completada" : "Pendiente"));
    }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
    const obtenerCompletadas = (lista) => lista.filter(tarea => tarea.completada);
    return obtenerCompletadas(lista);
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
    const tareasPendientes = (lista) => lista.filter((tarea) => !tarea.completada)
    return tareasPendientes(lista);
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
    return lista.map(tarea => tarea.nombre);
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
    return lista.length;
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
    tareas: tareas,

    mostrarTareas: function () {
        mostrarTareas(this.tareas);
    },

    mostrarCompletadas: function () {
        return obtenerCompletadas(this.tareas)
    },

    mostrarPendientes: function () {
        return obtenerPendientes(this.tareas)
    }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/

if (tareas.length === 0) {
    console.log("No hay tareas");
} else if (tareas.every(tarea => tarea.completada)) {
    console.log("Todas las tareas completadas.")
}

// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 2;

switch (opcion) {
    case 1:
        console.log("Obtener Tareas Switch")
        mostrarTareas(tareas);
        console.log("\n")
        break;

    case 2:
        console.log("Obtener Tareas Completadas Switch")
        const obtenerC = obtenerCompletadas(tareas);
        console.log(obtenerC);
        console.log("\n")

        break;

    case 3:
        console.log("Obtener Tareas Pendientes Switch")
        const tareasP = obtenerPendientes(tareas);
        console.log(tareasP);
        console.log("\n")
        break;

    default:
        console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

console.log("1. Arreglo Inicial de Tareas");
mostrarTareas(tareas);
console.log("\n");

console.log("2. Tareas Completadas");
const tareasCompletas = obtenerCompletadas(tareas);
console.log(tareasCompletas);
console.log("\n");

console.log("3. Tareas Pendientes");
const tareasPendientes = obtenerPendientes(tareas);
console.log(tareasPendientes);
console.log("\n");

console.log("4. Nombres Tareas");
const nombresTareas = obtenerNombres(tareas);
console.log(nombresTareas);
console.log("\n");

console.log("5. Cantidad Tareas");
console.log(contarTareas(tareas));
console.log("\n");

console.log("6. Cantidad Tareas");
console.log(sistema.mostrarTareas());
console.log(sistema.mostrarCompletadas())
console.log(sistema.mostrarPendientes())
console.log("\n");