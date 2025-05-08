"use strict";
{
    function formatString(input, toUpper) {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }
    function filterByRating(items) {
        return items.filter((item) => item.rating >= 4);
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
    ];
    // filterByRating(books)
    function concatenateArrays(...arrays) {
        return arrays.flat();
    }
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            // console.log( `Make :${this.make} , Year:${this.year}`);
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            //  console.log( `Model :${this.model}`);
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();
    myCar.getModel();
    function processValue(value) {
        if (typeof value == "string") {
            return value.length;
        }
        else {
            return value * 2;
        }
    }
    function getMostExpensiveProduct(products) {
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
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day == Day.Saturday || day == Day.Sunday) {
            return "weekend";
        }
        else {
            return "Weekday";
        }
    }
    // getDayType(Day.Monday);
    // getDayType(Day.Sunday);
    async function squareAsync(n) {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                if (n < 0) {
                    rejects("The number is negative");
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    }
    // squareAsync(4).then(console.log);
    // squareAsync(-3).catch(console.error); 
}
