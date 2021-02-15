//Hasta ahora vimos la diferencia entre var/let/const, usar `` mas el uso de ${} para concatenar y la desestructuracion.

const salario = 
[
{
    id: 1,
    salario: 1000,
},
{
    id: 2,
    salario: 3000,
},
{
    id: 3,
    salario: 6000,
}
]

const getSalario = ( id ) => 
{
    const promesa = new Promise((resolve, reject) => {

        const salarios = salario.find(salario => salario.id === id)?.salario

        if ( salarios ) {
            resolve ( salarios );
        }
        else 
        {
            reject (`No se ha encontrado el salario del id ${id}`)
        }
    });

    return promesa;
} 

const id = 1;

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));