let string = "asd fg hjkl";
let sumWords = 0;


if (typeof string === "string") {
    let arrString = string.split(" ");
    let longestWord = arrString[0].length;
    for (let i = 1; i < arrString.length; i++) {
        sumWords += i;
        if (arrString[i].length > longestWord) {
            longestWord = arrString[i].length;
        } else {
            continue;
        }
    } console.log(` ${sumWords} думи, най-дългата е с ${longestWord} символа.`);
} else {
    console.log("Invalid data");
}