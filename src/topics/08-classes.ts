export class Person {
    constructor(
        public name: string, 
        public address: string = 'Not Address'
    ) {}
}

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {}

}

const tony = new Person('Tony Stark', 'New York')
const ironMan = new Hero('Iron Man', 45, 'Tony Stark', tony);
console.log(ironMan);