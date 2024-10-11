//targeting first dice

var randomNumber1=Math.floor(Math.random() * 6)+1;

var randomDiceImage ="dice" + randomNumber1 +".png";

var randomImageSource ="images/" + randomDiceImage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//targeting second dice 

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2 ="images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML='	&#128681 player 1 wins';
}
else if(randomNumber2==randomNumber1){
    document.querySelector("h1").innerHTML='its a draw';
}
else{
    document.querySelector("h1").innerHTML='player 2 wins 	&#128681';
}


/*
function randomImg(){
    if(randomNumber1 ==1){
        document.getElementsByClassName("img1").setAttribute("src","/DOM/Dicee+Challenge+-+Starting+Files/images/dice1.png")
    }else if(randomNumber1 ==2){
        document.getElementsByClassName("img1").setAttribute("src","/DOM/Dicee+Challenge+-+Starting+Files/images/dice2.png")
    }else if(randomNumber1 ==3){
        document.getElementsByClassName("img1").setAttribute("src","/DOM/Dicee+Challenge+-+Starting+Files/images/dice3.png")
    }else if(randomNumber1 ==4){
        document.getElementsByClassName("img1").setAttribute("src","/DOM/Dicee+Challenge+-+Starting+Files/images/dice4.png")
    }else if(randomNumber1 ==5){
        document.getElementsByClassName("img1").setAttribute("src","/DOM/Dicee+Challenge+-+Starting+Files/images/dice5.png")
    }else if(randomNumber1 ==6){
        document.getElementsByClassName("img1").setAttribute("src","/DOM/Dicee+Challenge+-+Starting+Files/images/dice6.png")
    }
} 
    */