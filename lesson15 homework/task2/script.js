window.addEventListener("load", function() {

    let selectElement = document.getElementById('cars');
            function getOption(event) {
                
                let choice = document.getElementById('choice');
                choice.textContent = `${event.target.value}` ;
            }  
            selectElement.addEventListener('change', getOption);

})