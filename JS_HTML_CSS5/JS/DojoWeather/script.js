var cookieHolder = document.querySelector(".cookieHolder");

function accept(element){
    console.log(element.style);
    element.remove(cookieHolder);
}


document.querySelector('#tempSelect').onchange=function(){
    var change = document.querySelectorAll('.degreesRed')
    change.forEach(function(change){
        change.style.display='none'
    })
    var change2 = document.querySelectorAll('.degreesBlue')
    change2.forEach(function(change){
        change.style.display='none'
    })
    var replace = document.querySelectorAll('.degreesBluec')
    replace.forEach(function(change){
        change.style.display='inherit'
    })
    var replace2 = document.querySelectorAll('.degreesRedc')
    replace2.forEach(function(change){
        change.style.display='inherit'
    })
};


