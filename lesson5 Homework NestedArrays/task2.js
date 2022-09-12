//     Едномерен масив наричаме назъбен, ако всеки елемент в
//     масива е > от предишния и < от следващия. Напишете
//     програма, която проверява дали даден масив от числа е
//     назъбен.

var arr = [1, 21, 4, 8, 3, 18, 6, 7, 1];
var zigZag = true;
var tendency;

if (arr[0] > arr[1]) {
    tendency = false;
} else {
    tendency = true;
}
for (var i = 1; i < arr.length - 1; i++) {
    if (tendency === false) {
        if (arr[i - 1] <= arr[i] || arr[i] >= arr[i + 1]) {
            zigZag = false;
            break;
        }
    } else {
        if (arr[i - 1] >= arr[i] || arr[i] <= arr[i + 1]) {
            zigZag = false;
            break;
        }
    }
    tendency = !tendency;
}
console.log(zigZag ? "It's zigzag" : "It's not zigzag");
