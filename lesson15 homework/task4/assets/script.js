window.addEventListener("load", function() {

    let car = document.getElementById('image');
        function move(event) {
            let left;
            let top;

            switch (event.keyCode) {
                case 37:
                    left = (car.offsetLeft - 10);
                    left = left < 0 ? 0 : left;
                    car.style.left = left + "px"; 
                    break;
                case 39:
                    left = (car.offsetLeft + 10);
                    left = left > (window.innerWidth - car.width) ? (window.innerWidth - car.width) : left;
                    car.style.left = left + "px"; 
                    break;
                case 38:
                    top = (car.offsetTop - 10);
                    top = top < 0 ? 0 : top;
                    car.style.top = top + "px"; 
                    break;
                case 40:
                    top = (car.offsetTop + 10);
                    top = top > (window.innerHeight - car.height) ? (window.innerHeight - car.height) : top;
                    car.style.top = top + "px"; 
                    break;
            }
        }
        document.body.addEventListener('keydown', move);
        
})