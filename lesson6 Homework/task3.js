let string = "хипопотам";
let string2 = "хипопотук";

if (typeof string === "string" && typeof string2 === "string") {
    if (string.length === string2.length) {
        console.log("Двата низа са с равна дължина.");
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== string2[i]) {
                console.log(`Разлика по позиция:
                ${i + 1} ${string[i]} - ${string2[i]}`);
            } else {
                console.log("Нямат разлика");
            }
        }
    } else {
        console.log("Двата низа не са с равна дължина.");
    }
} else {
    console.log("Invalid data");
}