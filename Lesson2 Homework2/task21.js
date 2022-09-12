var num = 32;
var card;
var suit;


for (num; num <= 52; num++) {
    if (num % 4 === 0) {
        suit = "Пика";
    } else if (num % 4 === 1) {
        suit = "Спатия";
    } else if (num % 4 === 2) {
        suit = "Каро";
    } else if (num % 4 === 3) {
        suit = "Купа";
    }
    if(num <= 36){
        card = Math.ceil(num/4) + 1;
    }else if (num > 36 && num <= 40){
        card = "Вале";
    }else if (num > 40 && num <= 44){
        card = "Дама";
    }else if (num > 44 && num <= 48){
        card = "Поп";
    }else if (num > 48 && num <= 52){
        card = "Асо";
    }
    console.log(card,suit);
}
