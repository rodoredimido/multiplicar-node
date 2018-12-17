/**
 * requireds
 */
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolved, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`La base ${ base } o Limite ${ limite } no son Numeros!`);
        } else {
            let data = '';
            console.log('================================'.green);
            console.log(`tabla de ${ base }===`.green);
            console.log('================================'.green);
            for (let i = 0; i <= limite; i++) {
                data += `${ base } * ${ i } = ${base*i}\n`.blue;
            }
            resolved(data);
        }
    })




}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolved, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un Numero`);
            return;
        }
        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }
        fs.writeFile(`./tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolved(`tabla-${ base }-al-${ limite }`.yellow);

        });
    });
}
module.exports = {
    crearArchivo: crearArchivo,
    listarTabla
}