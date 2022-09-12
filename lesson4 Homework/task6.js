var firstArray = [13, 3, 7];
var secondArray = [13, 2, 7, 7];
var equals = true;

if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
    for (var i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            equals = false;
            break;
        }
    }
    console.log(equals ? "Масивите са еднакви." : "Масивите са различни.");
    if (firstArray.length === secondArray.length) {
        console.log("Масивите имат еднакъв размер.");
    } else {
        console.log("Масивите имат различен размер.");
    }
} else {
    console.log("Invalid data");
}