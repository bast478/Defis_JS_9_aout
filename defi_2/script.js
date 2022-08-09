document.addEventListener('keydown', e => {
    switch(e.key) {
        case 'r':
            document.body.style.backgroundColor = 'red';
        break;

        case 'g':
            document.body.style.backgroundColor = 'green';
        break;

        case 'b':
            document.body.style.backgroundColor = 'blue';
        break;

        case 'p':
            document.body.style.backgroundColor = 'pink';
        break;

        case 'y':
            document.body.style.backgroundColor = 'yellow';
        break;

        default: document.body.style.backgroundColor = 'white';
    }
});