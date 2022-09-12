let names = " Anna Dosewa Asenowa, Iwo Peew Peew";
let valueName1 = 0;
let valueName2 = 0;

if (typeof names === "string") {
    let arrNames = names.split(", ");
    let name1 = arrNames[0];
    let name2 = arrNames[1];
    for (let i = 0; i < name1.length; i++) {
        valueName1 += name1.charCodeAt(i);
    }
    for (let i = 0; i < name2.length; i++) {
        valueName2 += name2.charCodeAt(i);
    }
    if (valueName1 > valueName2) {
        console.log(name1);
    } else {
        console.log(name2);
    }
}else {
    console.log("Invalid data");
}