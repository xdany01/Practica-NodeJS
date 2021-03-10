const options = {
    base: {
        demand: true,
        alias: "b",
        describe: "Es la base de la tabla de multiplicar."
    },
    limite: {
        alias: "l",
        default: 10,
        describe: "Es la cantidad máxima de productos que se realizará."
    },
}
const argv = require("yargs")
    .command("crear", "Crea un archivo *.txt con la tabla de multiplicar segun el parametro ingresado.", options)
    .command("listar", "Imprime en consola la tabla de multiplicar", options)
    .version("1.0.0")
    .help().argv;
    
module.exports={
    argv
}