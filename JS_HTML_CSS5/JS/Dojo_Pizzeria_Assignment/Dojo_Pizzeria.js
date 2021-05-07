var Pizza = {
    crustType:    ["Deep Dish", "Hand Tossed"],
    sauceType:  ["Traditional", "Marinara"],
    cheeses:   ["Mozzarella", "Feta"],
    toppings: ["Pepperoni", "Sausage", "Mushrooms", "Olives", "Onions"],
    
};

console.log(Pizza);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza1 = {};
    Pizza1.crustType = crustType;
    Pizza1.sauceType = sauceType;
    Pizza1.cheeses = cheeses;
    Pizza1.toppings = toppings;
    Pizza1.display = function(){
        console.log("For this pizza: ")
        console.log("Crust is:     " + this.crustType)
        console.log("Sauce is:     " + this.sauceType)
        console.log("Cheese is:    " + this.cheeses)
        console.log("Toppings are: " + this.toppings)
        
    }
    return Pizza1;
}
    
var p1 = pizzaOven("Deep Dish", "Traditional", ["Mozzarella"], ["Pepperoni ", "Sausage"]);
p1.display();

var p2 = pizzaOven("Hand Tossed", "Marinara", ["Mozzarella"," Feta"], ["Mushrooms "," Olives ", " Onions "])
p2.display();

var extra1 = pizzaOven("Thin Crust", "Marinara", ["Mozzarella"], ["Pepperoni", " Jalpanos"])
extra1.display();

var extra2 = pizzaOven("Deep Dish", "Traditional", ["Mozzarella", "Feta"], ["Olives", " Onions"] )
extra2.display();

// RANDOM PIZZA ATTEMPT - semi success? it works kinda?


function randomPizza (){
    var randomPie = {};
    randomPie.crustType = Pizza.crustType[Math.floor(Math.random() *(Pizza.crustType.length))]
    randomPie.sauceType = Pizza.sauceType[Math.floor(Math.random() *(Pizza.sauceType.length))]
    randomPie.cheeses = Pizza.cheeses[Math.floor(Math.random() *(Pizza.cheeses.length))]
    randomPie.toppings = Pizza.toppings[Math.floor(Math.random() *(Pizza.toppings.length))]
    randomPie.display = function(){
        console.log("Random pizza crust is " + randomPie.crustType + ", with " + randomPie.sauceType + " sauce, with " + randomPie.cheeses + " cheese, and plenty of " + randomPie.toppings +".")
        return randomPie.display;
    }
    return randomPie
}

var random = randomPizza();
console.log(randomPizza());
random.display();
