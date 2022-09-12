let string = "Hello";
let newString = "";

function convert(ascii) {
    for (let i = 0; i < string.length; i++) {
        newString += String.fromCharCode(string[i].codePointAt(0) + 5);;
    }
    console.log(newString);
}
convert(string);