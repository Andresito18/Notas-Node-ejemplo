const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias:'c',
    default : true,
    desc: 'Marca como xompletado o pendiente la tarea'
};


const argv = require('yargs')
                     .command('crear', 'Crear un elempto por hacer',{
                         descripcion
                     })
                     .command('actualizar', 'Actualizar el estado de una tarea por hacer', {
                        descripcion,
                        completado
                     })
                     .command('borrar', 'borrar', {
                        descripcion
                     })
                     .help()
                     .argv;






module.exports = {
    argv
}