var num = 26;
var suit = null;
var card = null;

if(num <= 13){
    suit = "♣";
    if(num < 10){
        card = ++num;
    }else if(num === 10){
        card = "J";
    }else if(num === 11){
        card = "Q";
    }else if(num === 12){
        card = "K";
    }else if(num === 13){
        card = "A";
    }
}if(num > 13 && num <= 26){
    suit = "♦";
    if(num < 23){
        card = num - 12;
    }else if(num === 23){
        card = "J";
    }else if(num === 24){
        card = "Q";
    }else if(num === 25){
        card = "K"
    }else if(num === 26){
        card = "A";
    }
}if(num > 26 && num <= 39){
    suit = "♥";
    if(num < 36){
        card = num - 25;
    }else if(num === 36){
        card = "J";
    }else if(num === 37){
        card = "Q";
    }else if(num === 38){
        card = "K";
    }else if(num === 39){
        card = "A";
    }
}if(num > 39 && num <= 52){
    suit = "♠";
    if(num < 49){
        card = num - 38;
    }else if(num === 49){
        card = "J";
    }else if(num === 50){
        card = "Q";
    }else if(num === 51){
        card = "K";
    }else if(num === 52){
        card = "A";
    }
}
console.log(card,suit)