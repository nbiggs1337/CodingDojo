// /String Rotation
// Given a string and a number, rotate a string by that number
// Ex: Given RotateString("Hello World",3) return "rldHello Wo"
// Ex: Given RotateString("Rotated",4) return "atedRot"

// //Is Rotation
// Conversely, given a string and a possibly rotated string, return true or false whether the second string is a rotation of the first
// Ex: given isRotation("Hello World", "rldHello Wo"), return true
// Ex: given isRotation("Hello", "World"), return false


const rotation = (string, n) => {
    var a = string.slice(0,string.length-n);
    var b = string.slice(string.length-n,);
    var c = b + a;
    return c;
}


const isRotation = (a, b) => {
    for ( var i = 0; i < a.length; i++){
        var c = rotation(b, i);
        if ( c == a ) {
            return true;
        }
    }
    return false;
}


console.log(rotation("Hello World", 3))
console.log(rotation("Boris Godunov", 5))

console.log(isRotation("Hello World", "rldHello Wo"));
console.log(isRotation("Hello", "World"));