// SE IMPORTA MODULO FS (FileSystem)
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async( base =5, listar = false, hasta = 10) =>{

    try {
        if(listar){
        console.log('=================='.rainbow);
        console.log('  TABLA DEL:', base);
        console.log('=================='.rainbow);
        }

        let salida = '';
        let consola = '';
        // 5 x 1 = 5
        for(let i =1; i<= hasta; i++){
            salida += (`${base} X ${i} =  ${base * i}\n`);
            consola += (`${base} ${'X'.grey} ${i} ${'='.green}  ${base * i}\n`);
        }

        if(listar){
            console.log(consola);
        }
    
        //GRABAR EN EL ARCHIVO.
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }

  
}

//EXPORTANDO LA FUNCION DE CREAR ARCHIVO QUE VA TENER ESE MISMO NOMBRE
module.exports = {
    crearArchivoTabla,
}
