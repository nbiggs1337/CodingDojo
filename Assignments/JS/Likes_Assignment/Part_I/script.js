var likes = 3;
var likeElement = document.querySelector("#likes");

console.log(likeElement);

function add1(){
    likes++;
    likeElement.innerText = likes + " like(s)";
    console.log(likes);
}