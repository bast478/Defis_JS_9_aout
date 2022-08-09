const centre = document.querySelector('.centre');

let i=0;
centre.addEventListener('click', function (){
    i++;
    console.log(i);
    if(i % 10 === 0){
        centre.className = "";
        centre.classList.add('centre');
    }else if (i % 2 === 0){
        centre.classList.remove('impair');
        centre.classList.add('pair');
    }else{
        centre.classList.remove('pair');
        centre.classList.add('impair');
    }
});