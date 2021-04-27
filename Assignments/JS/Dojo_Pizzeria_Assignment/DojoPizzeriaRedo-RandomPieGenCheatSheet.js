// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//     var pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     pizza.display = function(){
//         console.log ( "The crust is:     " + this.crustType)
//         console.log ("The sauce is:     " + this.sauceType)
//         console.log ("The cheese is:    " + this.cheeses)
//         console.log ("The toppings are: " + this.toppings)
//     }
//     return pizza;
// }
                                                                            //<---works
// var p1 = pizzaOven("Thin", "Marinara", "Mozzarella", "Olives");
// p1.display();

//--------------RANDOM-PIZZA-GENERATOR-------------//

function randomPie (crustType, sauceType, cheeses, toppings) {  
    var Pizza = {  //define pizza properties avalible first
        crustType:   ["Deep Dish", "Hand Tossed", "Thin Crust", "Cheese Crust"],
        sauceType:  ["Traditional", "Marinara", "Alfredo", "BBQ", "Organic"],
        cheeses:  ["Mozzarella", "Feta", "Parm", "Queso"],
        toppings: ["Pepperoni", "Sausage", "Mushrooms", "Olives", "Onions", "Jalapinos", "Green Peppers"]
    }
    var ranPizza = {};  // then create random selector:
        ranPizza.crustType = Pizza.crustType[Math.floor(Math.random() * (Pizza.crustType.length))]
        ranPizza.sauceType = Pizza.sauceType[Math.floor(Math.random() * (Pizza.sauceType.length))]
        ranPizza.cheeses = Pizza.cheeses[Math.floor(Math.random() * (Pizza.cheeses.length))]
        ranPizza.toppings = Pizza.toppings[Math.floor(Math.random() * (Pizza.toppings.length))]
        ranPizza.display = function (){
            console.log("For this random pie:      "),
            console.log("The crust is:             " + ranPizza.crustType)
            console.log("The sauce is:             " + ranPizza.sauceType)
            console.log("The cheese is:            " + ranPizza.cheeses)
            console.log("The toppings are:         " + ranPizza.toppings)
        }
    return ranPizza.display();
}

 //call on function to execute.

console.log(randomPie());

