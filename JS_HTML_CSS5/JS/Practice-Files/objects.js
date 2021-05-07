var name = ["Link", "Zelda"];
var weapons = ["Master Sword", "Shield", "Noomerang", "Hookshot","Chain Scythe", "Shuriken"];
var armor = ["Green Tunic", "Shield Battle Armor"];
var hearts = ["3", "5"];
var companion = "Navi";
var hasMagic = ["True", "False"];



var link = {
    "name": "Link",
    "weapons": ["Master Sword", "Shield", "Noomerang", "Hookshot"],
    "armor": "Green Tunic",
    "hearts": "3",
    "hasMagic": "false",
    //this above can all be the same var sets, due to the below vars defining them.
}
console.log('Zelda')

var Zelda = {
    "name": "Zelda",
    "weapons": ["Chain Scythe", "Shuriken"],
    "armor": "Shield Battle Armor",
    "hearts": "5",
    "hasMagic": "true",
    "attack": function() {
        console.log("Zelda turns into Shiek and kicks your butt!")
    }
}
