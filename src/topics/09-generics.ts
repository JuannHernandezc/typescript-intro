export function whatsMyType<T>( argument: T ): T{
    return argument;
}

const myString = whatsMyType<string>('Hola Mundo');
const myNumber = whatsMyType<number>(2000);
const myArray = whatsMyType<number[]>([1,2,3,4]);

console.log(myString.split(' '));
console.log(myNumber.toFixed());
console.log(myArray.join('-'));