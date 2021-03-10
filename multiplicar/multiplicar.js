const fs = require("fs");
const colors = require('colors');

let crearArchivoTabla = (base) => {
  return new Promise((resolve, rejects) => {
    let i = 1;
    let data = "";
    if (isNaN(base)) {
      rejects("La base ingresada no es un numero.");
    } else if (base === null) {
      rejects("La base ingresada es null.");
    } else if (base === undefined || base === "") {
      rejects("La base ingresada es undefined.");
    } else if (base < 0) {
      rejects("La base ingresada es negativa.");
    } else {
      while (i <= 10) {
        data += `${base} x ${i} = ${base * i}\n`;
        i++;
      }
    }
    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
      err ? rejects(err) : resolve(`Tabla del ${base}.`.red);
    });
  });
};

let listarTabla = (base, limite) => {
  return new Promise((resolve, rejects) => {
    let i = 1;
    if (isNaN(base)) {
      rejects("La base ingresada no es un numero.");
    } else if (base === null) {
      rejects("La base ingresada es null.");
    } else if (base === undefined || base === "") {
      rejects("La base ingresada es undefined.");
    } else if (base < 0) {
      rejects("La base ingresada es negativa.");
    } else {
      console.log(`==== Tabla del ${base} ====`.green);
      while (i <= limite) {
        console.log(`${base} x ${i} = ${base * i}`);
        i++;
      }
      console.log('====================='.green);
    }
  });
};

module.exports = {
  crearArchivoTabla,
  listarTabla
};
