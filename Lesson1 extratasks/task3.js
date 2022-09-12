var num = 2005;

if (Math.floor(num / 1000) === 0) {
    console.log("The first digit of num is 0");
} else if (Math.floor(num / 100) % 10 === 0) {
    console.log("The second digit of num is 0");
} else if (Math.floor(num / 10) % 10 === 0) {
    console.log("The third digit of num is 0");
} else if (Math.floor(num / 1) % 10 === 0) {
    console.log("The fourth digit of num is 0");
} else {
    console.log("There is no 0 here")
}
