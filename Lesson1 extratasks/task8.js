var xA = 0;
var yA = 0;

if(xA > 0 && yA > 0){
    console.log("The point A is in first quadrant!");
}else  if(xA < 0 && yA > 0){
    console.log("The point A is in second quadrant!");
}else  if(xA < 0 && yA < 0){
    console.log("The point A is in third quadrant!");
}else  if(xA > 0 && yA < 0){
    console.log("The point A is in fourth quadrant!");
}else if(xA === 0 && yA === 0){
    console.log("The point A is in the center!");
}else if(xA === 0 && (yA < 0 || yA > 0)){
    console.log("The point A lay on the X axial line!")
}else{
    console.log("The point A lay on the Y axial line!")
}
