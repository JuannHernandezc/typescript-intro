import { IProduct, taxCalculation } from './06-function-destructuring';
const shoppingCart: IProduct[] = [
    {
        description: 'Nokia A2',
        price: 300000
    },
    {
        description: 'Ipad',
        price: 312000
    }
];


const [ total, taxEnd ] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});


console.log('Total', total);
console.log('Tax', taxEnd);
