// tarea 2 gustavo romero

/// CASO 1 //////////////////////

var objeto1 = {
    mascotas: ['perros', 'gatos', 'canarios', 'pez', 'serpiente'],
    eliminarMascota: function(elemento){
        primerElemento = this.mascotas.splice(this.mascotas.indexOf(elemento), 1);
        return this.mascotas;
    },
    eliminarUltimaMascota: function(){
        this.mascotas.pop();
        return this.mascotas;
    },
    agregarMascota: function(nuevaMascota){
        this.mascotas.push(nuevaMascota);
        return this.mascotas;
    },
    contadorMascotas: function(){
        palabra = this.mascotas;
        const filtro = this.mascotas.filter(palabra => palabra.endsWith('os'));
        return "En el arreglo hay" + filtro.lenght + "mascota(s) que termina(n) con 'os'";
    },
};

/////////// CASO 2 //////////////////////

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicacion: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],
    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,  
}

const desestructurar1 = (trabajador) => {
    const {
        nombre: nomTrabajador,
        empresa: {
            datos: {
                nombre: empresa
            }
        },
        cargo: cargoTrabajador,
        gustos: [gusto1, ...restoGustos],
        hijos: vacio
    } = trabajador;
    return `El trabajador ${nomTrabajador} trabaja en ${empresa} 
    con cargo ${cargoTrabajador} y le gusta ${restoGustos} y ${gusto1}, ${vacio}`;
};

const desestructurar2 = (trabajador) => {
    const {
        nombre: nomTrabajador,
        empresa: {
            ubicacion: {
                comuna: comunaTrab,
                puesto: puestoTrab
            },
            clientes: [app1, app2]
        },
        cargo: cargoTrabajador,
    } = trabajador;
    return `El trabajador ${nomTrabajador} va a su trabajo en ${comunaTrab},
    es ${cargoTrabajador}, en el puesto ${puestoTrab}, trabaja con ${app1} y ${app2}`;
}

