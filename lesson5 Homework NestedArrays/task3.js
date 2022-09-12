// Напишете програма, която за даден масив от символи arr и
// символ ch, въведен от потребителя, проверява али arr съдържа
// ch. Ако се съдържа, отпечатайте индекса на елемента. Ако не,
// отпечатайте подходящо избрана от вас стойност.

let arr = ["a", "b,", "c", "ch", "1"];
let symbol = "ch";
let result = arr.indexOf(symbol);

if (Array.isArray(arr)) {
    if (result === -1) {
        console.log(`There's no ${symbol}`);
    } else {
        console.log(result);
    }
} else {
    console.log(`Invalid data`);
}