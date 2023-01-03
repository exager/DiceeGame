var clicker = document.querySelector("#btn-main");

clicker.addEventListener("click", changeDices)

function changeDices(){
    var randomNumber1 = Math.random()*5 + 1;
    randomNumber1 = Math.floor(randomNumber1 );
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

    var randomNumber2 = Math.random()*5 + 1;
    randomNumber2 = Math.floor(randomNumber2 );
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

    titleVal = document.querySelector(".container > h1")

    if(randomNumber1>randomNumber2)
        titleVal.innerText = "Player 1 Wins🏆";
    else if(randomNumber1 < randomNumber2)
        titleVal.innerText = "🏆Player 2 Wins";
    else
        titleVal.innerText = "Its-A Draw 🤌";
}