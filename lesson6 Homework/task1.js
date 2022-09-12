let string = "AbcdkjFD";
let string2 = "DRGEjtrkreel";
let result = "";

if ((typeof string === "string" && typeof string2 === "string")
    && (string.length <= 40 && string2.length <= 40)) {
    result += string.toUpperCase() + " ";
    result += string.toLowerCase() + " ";
    result += string2.toUpperCase() + " ";
    result += string2.toLowerCase();
} else {
    console.log("Invalid input");
}
console.log(result);