let string = "pineapple";
let string2 = "pomegranate";
let result = "";
let result2 = "";
let length = 0;

if ((string.length + string2.length) >= 7
    && (string.length + string2.length) <= 20
    && (typeof string === "string" && typeof string2 === "string")) {
    result += string.slice(0, 5);
    result2 += string2.slice(0, 5);
    if (string.length >= string2.length) {
        length += string.length;
    } else {
        length += string2.length;
    }
    console.log(length + ", " + string.replace(result, result2) + ", " + string2.replace(result2, result));
}else {
    ("Invalid data");
}
