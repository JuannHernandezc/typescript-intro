// function addNumbers( a: number, b: number ): number {
//     return a + b;
// }

// const addNumbersArrow = ( a:number, b: number): number => {
//     return a + b;
// }

// const multiply = ( firstNumber: number, seconddNumber?: number, base: number = 2) => {
//     return firstNumber * base;
// }

// const result: number = addNumbers(1,1);
// console.log({ result });

// const resultArrow: number = addNumbersArrow(2,2);
// console.log({ resultArrow });

// const resultMultiply: number = multiply(5);
// console.log({ resultMultiply });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character , amount: number ): void => {
    character.hp += amount;
} 

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }

}

healCharacter(strider, 10);
strider.showHp();


export {};
