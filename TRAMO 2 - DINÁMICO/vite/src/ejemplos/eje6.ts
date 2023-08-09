//ejemplos de funciones

function imprimir_saludo() 
{
    console.log('Hola Argentina Programa');
}

imprimir_saludo();

function sumar(op1:number, op2:number):number
{
    return op1 + op2;
}

console.log('Valor de la suma es ' + sumar(1,3));

//función flecha

let suma2 = (p1: number, p2: number) => {
    return p1 + p2
}

console.log('Valor del resultado es ' + suma2(1,5));