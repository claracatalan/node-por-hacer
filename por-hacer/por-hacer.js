const fs = require('fs');
const { clearScreenDown } = require('readline');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No de puedo grabar', err)
    });

}

const cargarDB = () => {
    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const listar = () => {
    cargarDB();

    // if (completado !== undefined) {
    //     let list = [];
    //     for (let listado of listadoPorHacer) {
    //         console.log(listado);
    //         // list = listado.filter(tarea => tarea.completado === completado);
    //     }
    //     return list;
    // } else {
    return listadoPorHacer;
    // }
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length !== nuevoListado.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    } else {
        return false;
    }

    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // if (index >= 0) {
    //     listadoPorHacer[index] = {};
    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}