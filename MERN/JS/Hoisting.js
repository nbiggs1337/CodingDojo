// //Example: 

// //console.log(example);
// //let example = "I'm the example!";    
// //INTERPRETED

// //var example;
// //console.log(example); logs undefined;
// //let example = "I'm the example!"; //defines example. 


// //1)
// //console.log(hello);                                   
// //var hello = 'world';                                 

// //INTERPRETED
// //var hello; 
// //console.log('hello');
// //var hello = 'world';


// //2) 
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// //INTERPRETED
// var needle;
// function test()
// var needle;
//  var needle = 'magnet';
// console.log(needle)


// //3) 
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// //INTERPRETED

// var brendan 
// function print()
// var brendan = 'super cool';
// console.log(brendan);

// //4) 
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// //INTERPRETED
// var food
// function eat()
// var food
// food = 'half-chicken';
// console.log(food);
// var food = 'gone';
// var food = 'chicken';
// console.log(food);


//5)
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//INTERPRETED
var mean;
undefined
undefined






//6) 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//INTERPRETED
var genre 

function rewind()
var genre;
var genre = "rock";
var genre = "r&b";
console.log(genre);
console.log(genre);

var genre = "disco";
console.log(genre);
console.log(genre);






//7) 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//INTERPRETED

var dojo

function learn();
var dojo;
dojo = 'seattle';
dojo = "burbank";
console.log(dojo)
console.log(dojo)

dojo = "san jose";
console.log(dojo);
console.log(dojo);




