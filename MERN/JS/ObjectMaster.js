const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//ex: 
// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// const pkmnIds = pokémon.map( p => p.id )

// console.log(pkmnIds);
// console.log(bListPkmn);
//===========================================

//Ids divisible evenly by 3;

const IDsModulus3 = pokémon.filter(p => p.id % 3 == 0);
console.log(IDsModulus3);

//Pokemon that are fire type;

const FireTypes = pokémon.filter( p => p.types.includes("fire"));
console.log(FireTypes);

//Pokemon that have multiple types;

const MultiTypes = pokémon.filter( p => p.types.length > 1);
console.log(MultiTypes);

//Just names;

const JustNames = pokémon.map( p => p.name);
console.log(JustNames);

//Just names with ID greater than 99;

const NamesGreaterThan = pokémon.filter(p => p.id > 99).map(p => p.name);
console.log(NamesGreaterThan);


//Just names of pokemon whose only type is poison!;

const PoisonNames = pokémon.filter( p => p.types == "poison").map( p => p.name);
console.log(PoisonNames);

//Just names whose second type is flying!;

const FlyingNames = pokémon.filter(p => p.types[1] == "flying").map(p => p.name);
console.log(FlyingNames);

//Count of the number of normal types 

const Normies = pokémon.filter(p => p.types == "normal").length;
console.log(Normies);