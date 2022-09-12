window.addEventListener("load", function() {

    let button = document.getElementById('random-image')
    let img = document.createElement('img');
    img.width = 300;
    
    let image1 = document.getElementById('image1').getAttribute('src');
    let image2 = document.getElementById('image2').getAttribute('src');
    let image3 = document.getElementById('image3').getAttribute('src');
    let image4 = document.getElementById('image4').getAttribute('src');
    let image5 = document.getElementById('image5').getAttribute('src');
    
    function showImg() {
        
        let array = [image1, image2, image3, image4, image5];
     
        img.src = array[Math.floor(Math.random()*array.length)];
    };

    document.body.appendChild(img);
    button.addEventListener('click', showImg);   
    
})