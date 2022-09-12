window.addEventListener('load', function () {

    let form = document.getElementById('shopping');
    let arr = [];
    let list = document.getElementById('list');

    form.addEventListener('submit', function (e) {

        e.preventDefault();

        let input = document.getElementById('new-product');
        let newElem = document.createElement('span');
        let button = document.createElement('button');
        let newLine = document.createElement('br');

        if (input.value !== '') {
            arr.push(input.value);

            button.innerText = `Remove`
            list.appendChild(newElem);
            list.appendChild(button);
            list.appendChild(newLine);
            newElem.innerText = `${input.value}`;

            input.value = '';
        }

        button.addEventListener('click', () => {
            newElem.remove();
            button.remove();
            newLine.remove();
        })

        newElem.addEventListener('click', () => {
            if (newElem.style.textDecoration === '') {
                newElem.style.textDecoration = 'line-through';
            } else {
                newElem.style.textDecoration = '';
            }
        })
    });

});
