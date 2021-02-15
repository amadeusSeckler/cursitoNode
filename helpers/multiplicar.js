const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const multiplicar = async(base, listar, hasta ) => {

    try{

        console.log("=======================");
        console.log(`    TABLA DEL ${base}  `);
        console.log("=======================");
    
        
    
            let salida = "";
    
            for(var i = 0; i <= hasta; i++)
            {
                salida += `${base} x ${i} = ${base*i}\n`;
            }
        
            if (listar) {
                console.log(salida)
            }

            fs.writeFileSync('./salida/' + `tabla-${base}.txt`,salida)
    
            return `tabla-${base}.txt`
            
    }
    catch(err)
    {
        throw err
    }


}

module.exports = {
    multiplicar
}