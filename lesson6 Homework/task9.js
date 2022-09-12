let string = "asd-12sdf45-56asdf100";
let nums = "";
let arr = [];

if (typeof string === "string") {
    for (let i = 0; i < string.length; i++) {
        if (!(string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58)) {
            if (nums) {
                arr.push(nums);
            }
            if (string[i] === "-") {
                nums = "-";
            } else {
                nums = "";
            }
        } else {
            nums += string[i];
        }
        if (i === string.length - 1) {
            arr.push(nums);
        }
    }
    let result = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "-") {
            result += 0;
        } else {
            result += Number(arr[j]);
            console.log(arr[j]);
        }
    }
    console.log(`Сума = ${result}`);
}else {
    console.log("Invalid data");
}
