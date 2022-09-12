window.addEventListener("load", function() {

    let button = document.getElementById("button");

            function backgroundColoring(event) {
                let input1 = document.getElementById("input1").value;
                let input2 = document.getElementById("input2").value;
                let input3 = document.getElementById("input3").value;
                
                if (input1 < 0 || input1 > 255){
                    input1.value = 0;
                } else if (input2 < 0 || input2 > 255){
                    input2.value = 0;
                } else if (input3 < 0 || input3 > 255){
                    input3.value = 0;
                }
                event.preventDefault()
                document.body.style.backgroundColor = `rgb(${input1},${input2},${input3})`;
            }
            button.addEventListener('click', backgroundColoring);

})