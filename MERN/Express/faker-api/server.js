const express = require("express");
const app = express();
var faker = require('faker');
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor() {
        this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
};

class Company {
    constructor() {
        this.id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
            
        }
    }
};

// console.log( new Company());
// console.log(new User());

app.get("/api/users/new", (req, res) => {
    console.log("Gen-ing User...")
    res.json(  new User() );
});

app.get("/api/companies/new", (req, res) => {
    console.log("Gen-ing new shell corp...")
    res.json( new Company() );
});

app.get("/api/user/company", (req, res) => {
    console.log("Gen-ing new Identity/Workplace...")
    res.json( {user: new User(), company: new Company()} )
})


const server = app.listen(8000, () => 
console.log(`Server locked and loaded - ready to fraud! - ${server.address().port}`)
);