
var nameElement = document.querySelector(".name");

function edit(){
    console.log(".edit");
    nameElement.innerText = "Johnny Doeson";
}


var btnResponse = document.querySelector(".todd");
var btnResponse2 = document.querySelector(".phil");

function response(element) {
    console.log(element);
    btnResponse.remove();
    sub1();
}
function response2(element) {
    console.log(element);
    btnResponse2.remove();
    sub1();
}

var two = 2;
var reqElement = document.querySelector(".two");

function sub1(){
    two--;
    reqElement.innerText = two;
    console.log(two);
}