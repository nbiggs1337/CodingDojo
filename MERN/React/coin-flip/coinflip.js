function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let heads = 0;
        let attempts = 0;
        while ( heads < 5 && attempts < 100){
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped!`);
            if ( result == "heads") {
                heads++;
            } else {
                heads = 0;
            }
        }
        if ( heads == 5 ) {
            resolve(`Heads resolved 5 times in a row, after ${attempts} attempts!`)
        } 
        else {
            reject(`Failed to land heads 5x in a row after ${attempts} attempts!`)
        }
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => {
        console.log("We're in the catch")
        console.log(err);
    })


// console.log(fiveHeads())

// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );
