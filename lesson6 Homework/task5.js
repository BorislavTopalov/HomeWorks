let string = "сол";
let string2 = "лале";
let col = "";
let row = "";

if (typeof string === "string" && typeof string2 === "string") {
    for (let i = 0; i < string.length; i++) {
        col = string[i];
        if (col === string2[0]) {
            col = "";
            row = string2;
        } else {
            row = "";
        }
        console.log(col + row);
    }
} else {
    console.log("Invalid data");
}