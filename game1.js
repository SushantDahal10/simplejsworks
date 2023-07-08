let sum=0;
let cards=[];
let hasblackjack=false;
let isalive=false;
let message="";
let newmessage=document.getElementById("message");
let newsum=document.getElementById("sum");
let newcard=document.getElementById("card");
let players={
name:"per",
money:145
}

let player=document.getElementById("player");
player.textContent=players.name + ": $ " +players.money;
function getrandomcard(){
    let random=Math.floor(Math.random()*13)+1;
    if (random > 10){
        return 10;
    }
    else    if(random == 1){
        return 11;
    }
    else{
    return random;}
}

function startgame(){
let firstcard=getrandomcard();
let secondcard=getrandomcard();
cards=[firstcard,secondcard];//array
sum=firstcard + secondcard;
isalive=true;
    rendergame();
}
function rendergame(){
   
    newcard.textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
        newcard.textContent+=cards[i]+" ";
    }
    newsum.textContent="Sum: "+sum;
if(sum<=20){
    message="Do you Waant to draw a new card?";
    isalive=true;
}
else if(sum==21)
{
message="Wohoo! You Got Blackjack";
hasblackjack=true;
isalive=false;
}
else{
    message="out of game";
    isalive=false;

}
newmessage.textContent=message;
}
function newcards(){
    if (isalive == true && hasblackjack == false){ 
    let card=getrandomcard();
    sum+=card;
    cards.push(card);
   rendergame();    }   
}