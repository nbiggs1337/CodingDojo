class Ninja {
    constructor(name, health = 100, speed =3, strength =3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        
    }
    
    sayName(){
        console.log(`I am a ninja and my name is ${this.name}`);
    }
    
    showStats(){
        console.log(`My name is ${this.name}, my strength is ${this.strength}, my speed is ${this.speed}, and my health is ${this.health}`);
    }
    
    drinkSake(){
        this.health += 10;
    }
}

//child class 'Sensei'

class Sensei extends Ninja {
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10)
        this.wisdom = wisdom;
    }
    
    speakWisdom(){
        console.log("The platforms methods are stupid, this is how I do it.");
    }
    
    drinkSake(){
        super.drinkSake();
    }
    
    sayName(){
        super.sayName();
    }
    
}

const sensei1 = new Sensei("Mitch")
const ninja1 = new Ninja("Noah");
ninja1.sayName();

sensei1.sayName();
ninja1.showStats();
sensei1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();

ninja1.showStats();
