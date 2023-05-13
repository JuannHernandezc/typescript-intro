function classDecorator<T extends { new (...arg:any[]): {} }>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'Override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'ABC123';

    print() {
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);