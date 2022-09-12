let string = "супер яката задача";
let newString = "";

if (typeof string === "string") {
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            newString += string[i].toUpperCase();
        } else if (string[i] === " ") {
            i++;
            newString += " " + string[i].toUpperCase();
        } else {
            newString += string[i];
        }
    } console.log(newString);
} else {
    console.log("Invalid data");
}