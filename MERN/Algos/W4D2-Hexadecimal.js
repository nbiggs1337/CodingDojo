// Hexadecimal to Decimal
// Given a hexadecimal string, return the number it equates to
// Ex: Given 1C return 28
// Ex: Given 93E88 return 605832
// Ex: Given FF return 255
// Ex: Given FFDAB9 return 16767673, then look up FFDAB9
// 0 -16
//0 1 2 3 4 5 6 7 8 9 A10 B11 C12 D13 E14 F15

function hexToDec(hex) {
    let result = 0;
    const hexChars = '0123456789ABCDEF';

    for (let i = hex.length-1; i >= 0; i--) {
        if (hexChars.includes(hex[i])) {
            let v = hexChars.indexOf(hex[i]);
            result += v * 16**(hex.length-1-i);
        }
    }
    return (hex[0] == '-' ? -result : result);
}

function decToHex(dec) {
    let result = "";
    const hexChars = '0123456789ABCDEF';
    let isNeg = false;
    if (dec < 0) {
        isNeg = true;
        dec = -dec
    }
    while (dec > 0) {
        let r = dec%16;
        dec = (dec - r)/16;
        result = hexChars[r] + result;
    }
    return (isNeg ? '-'+result : result);
}

console.log(hexToDec("FFFFAB2"))
console.log(decToHex(-25));