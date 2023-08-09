class Persona {
    //atributo
    nombre: string;
    dni: number;

    //metodos
    constructor(nuevoNombre: string, pDNI: number){
        this.dni = pDNI;
        this.nombre = nuevoNombre;
    }

    decirMiNombre() {
        console.log(this.nombre);
    }
}

let obj1 = new Persona('Franco',25653895);
obj1.decirMiNombre();

let obj2 = new Persona('Carla',36526555);
obj2.decirMiNombre();