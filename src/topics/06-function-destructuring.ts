export interface IProduct {
    description: string;
    price: number ;
}

interface ITaxCalculationOptions {
    tax: number;
    products: IProduct[];
}

const phone: IProduct = {
    description: 'Nokia A1',
    price: 150000
}


const tablet: IProduct = {
    description: 'Ipad Air',
    price: 250000
}



export function taxCalculation( options: ITaxCalculationOptions ): [number, number] {

    let total = 0;

    const { products, tax } = options;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart: IProduct[]  = [phone, tablet];
const tax: number = 0.15;

const [total, taxEnd] = taxCalculation({
    tax,
    products: shoppingCart
});

console.log('Total', total);
console.log('Tax', taxEnd);
