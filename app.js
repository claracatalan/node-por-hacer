const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let command = argv._[0];

switch (command) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(`Se creó la tarea "${tarea.descripcion}"`);
        break;

    case 'listar':
        let tareas = porHacer.listar();

        console.log('========== Tareas =========='.green);
        for (let tarea of tareas) {
            console.log(`-> ${tarea.descripcion}`);
            console.log(`Estado completado: ${tarea.completado}\n`);
        }
        console.log('============================'.green);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        if (actualizado) {
            console.log(`Se ha actualizado la tarea "${argv.descripcion}"`);
        } else {
            console.log(`No se ha podido actualizar la tarea "${argv.descripcion}"`);
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        if (borrado) {
            console.log(`Se ha borrado la tarea "${argv.descripcion}"`);
        } else {
            console.log(`No se ha podido borrar la tarea "${argv.descripcion}"`);
        }
        break;

    default:
        console.log('Comando no reconocido');
}