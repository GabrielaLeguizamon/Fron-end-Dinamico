//Ejemplo de desestructuración

type Persona2 = {
    nombre: string;
    apellido: string;
    edad: number;
    dni: number;
}

const persona: Persona2 = { nombre: "Pablo", apellido: "López", edad: 28, dni: 38828282};

const { nombre, apellido, edad, dni} = persona;