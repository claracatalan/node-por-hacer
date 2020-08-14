const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca a la tarea por hacer como completada o pendiente'
};



const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('listar', 'Muestra todas las tareas por hacer')
    .command('actualizar', 'Actualiza el estado de una tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borra de una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}