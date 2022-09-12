let string = "капак";
let newString = "";

if (typeof string === "string") {
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    if (newString === string) {
        console.log("Да");
    } else {
        console.log("Не");
    }
} else {
    console.log("Invalid data");
}