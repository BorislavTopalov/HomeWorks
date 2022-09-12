var num = 0;

for( var i = 2; i<= Math.sqrt(num); i++){
    if(num % 2 === 0){
        console.log("The number " + num + " is not prime");
    }else{
        console.log("The number " + num + " is prime");
    }
}if (num < 2){
    console.log("The number " + num + " is not prime");
}