


class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
        
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
        
    }
    
    attack(target){
        target.res -= this.power;
        console.log(`${target.name}s resilience was decreased by ${this.power}!!`) 
    }
}

class Effect extends Card {
    constructor(name, cost, mag, stat, text) {
        super(name, cost);
        this.mag = mag;
        this.stat = stat;
        this.text = text;
        
    }
    
    play (target) {
        if ( target instanceof Unit) {
            
            // target.power += this.power;
            // target.res += this.res;
            target[this.stat] += this.mag
            
            console.log(this.text);
            
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}


var  RedNinja = new Unit("Red Ninja", 3, 3, 4);
var BlueNinja = new Unit("Blue Ninja", 4, 5, 4);

const HardAlgo = new Effect("Hard Algorithm", 2, 3, "res", "Increase target's resilience by 3!");
const UPR = new Effect ("Unhandled Promise Rejection", 1, -2, "res", "Reduced targets resilience by 2!");
const PairP = new Effect("Pair Programming!", 3, 2, "power","Increased targets power by 2!");



console.log(BlueNinja);
console.log(RedNinja);
HardAlgo.play(RedNinja);

console.log(RedNinja);

UPR.play(RedNinja);

console.log(RedNinja);

PairP.play(RedNinja);

console.log(RedNinja);

RedNinja.attack(BlueNinja)

console.log(RedNinja);
console.log(BlueNinja);