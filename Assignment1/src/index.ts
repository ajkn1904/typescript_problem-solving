/*
*/

function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
    

console.log(formatString("Hello"));          // Output: "HELLO"
console.log(formatString("Hello", true));   // Output: "HELLO"
console.log(formatString("Hello", false));  // Output: "hello"


/*
*/

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(e => e.rating >= 4);  
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 2.0 },
    { title: "Book E", rating: 9.2 },
    { title: "Book F", rating: 5.5 }
    ];
    
    console.log(filterByRating(books)); 
    // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

/*
*/
function concatenateArrays<T>(...arrays: T[][]): T[]{
    const newArr : T[] = [];
    for(let i of arrays){
        newArr.push(...i)
    }
    return newArr;
}

console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]


/*
*/
class Vehicle{
    private make: string;
    year: number;
    constructor(make:string, year:number){
        this.make = make;
        this.year = year;
    }
    getInfo(){
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle{
    private model: string;
    constructor(make:string, year:number, model:string){
        super(make, year);
        this.model=model;
    }
    getModel(){
        console.log(`Model: ${this.model}`);
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"
    


/*
*/
function processValue(value: string | number): number{
 if(typeof value === 'string'){
    return value.length;
 } 
 if(typeof value === 'number'){
    return value*2;
 } 
 throw new Error("Input should be string or number!");
}



console.log(processValue("hello"));// Output: 5
console.log(processValue(10));     // Output: 20


/*
*/
interface Product {
    name: string;
    price: number;
  }
  
function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length == 0){
        return null;
    }
    
    let expensiveProduct = products[0];
    for(let item of products){
        if(item.price>expensiveProduct.price){
            expensiveProduct = item;
        }
    }
    return expensiveProduct;
    
}

const products = [
{ name: "Pen", price: 10 },
{ name: "Notebook", price: 25 },
{ name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));  
// Output: { name: "Bag", price: 50 }


/*
*/
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
  
function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend"
    }
    else return "Weekday"
}

console.log(getDayType(Day.Monday));   // Output: "Weekday"
console.log(getDayType(Day.Sunday));   // Output: "Weekend"


/*
*/
async function squareAsync(n: number): Promise<number>{
    return new Promise<number>((resolve, reject) => {
    if(n<0){
        reject("Error: Negative number not allowed");  
    }
    else {
        setTimeout(()=>{
        resolve(n * n);}
    , 1000)
    }
}); 
};

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

