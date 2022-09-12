window.addEventListener("load", function() {

    let symbol = document.getElementById('symbol');
            let code = document.getElementById('code');
          
            function getCode(event) {
                code.textContent = `${event.keyCode}`;
            }
            symbol.addEventListener('keydown', getCode);
            
})