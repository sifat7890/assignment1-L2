{

    function formatString(input: string, toUpper?: boolean): string {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }



 
    function filterByRating(items: { title: string; rating: number }[]): {
        title: string;
        rating: number;
    }[] {
        return items.filter((item) => item.rating >= 4);
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },

    ];

    // filterByRating(books)


 


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.flat();
    }

 
 
    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        public getInfo() {
            // console.log( `Make :${this.make} , Year:${this.year}`);

        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        public getModel() {
            //  console.log( `Model :${this.model}`);

        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();
    myCar.getModel();



 


    function processValue(value: string | number): number {
        if (typeof value == "string") {
            return value.length;
        }
        else {
            return value * 2;
        }
    }
    // processValue("hello");
    // processValue(10);



    
 
    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length == 0) {
            console.log("Array is empty");
            return null;
        }
        else {
            return products.reduce((product, high) => high.price > product.price ? high : product);
        }
    }

    const products = [
        { name: "Pen", price: 200 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    //  getMostExpensiveProduct(products)


 
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        if (day == Day.Saturday || day == Day.Sunday) {
            return "weekend";
        }
        else {
            return "Weekday"
        }
    }

    // getDayType(Day.Monday);
    // getDayType(Day.Sunday);


 

    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                if (n < 0) {
                    rejects("The number is negative")
                } else {
                    resolve(n * n);
                }
            }, 1000)
        })
    }
    // squareAsync(4).then(console.log);
    // squareAsync(-3).catch(console.error); 
}