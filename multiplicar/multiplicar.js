//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Los valores introducidos de ${base } y/o ${limite} no se reconocen como números `);
            return;
        }
        console.log('=================='.green);
        console.log(`tabla de ${base}`.green);
        console.log('=================='.green);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        console.log(data);
        resolve(`Listado tabla del ${base} con límite ${limite}`)
    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base } no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
            console.log('El archivo ha sido creado');
        });
    })
}



module.exports = {
    crearArchivo,
    listarTabla
}