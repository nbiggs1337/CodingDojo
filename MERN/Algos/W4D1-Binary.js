// Binary String to Decimal
bsToDec = (bString) => {
    exponent = 0
    output = 0
    for(let i = bString.length-1; i >= 2; i--){
        if(bString[i] == 1) output += 2**exponent
        exponent++
    }
    return output
}
console.log(bsToDec('0b100111'))
console.log(bsToDec('0b101100111'))

// Decimal to Binary String
decToStr = (num) => {
    output = ""
    x = 2
    while(num > 0){
        if(num%x >= 1) output = "1" + output
        else output = "0" + output
        num -= num%x
        x *= 2
    }
    return "0b" + output
}
// Ex: given 109 return "1101101"
// Ex: given 4 return "100"
// Ex: given 21 return "10101"
console.log(decToStr(109))
console.log(decToStr(4))
console.log(decToStr(21))