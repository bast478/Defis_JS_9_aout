const p = document.getElementsByTagName('p')[0];
const button = document.getElementsByTagName('button')[0];
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');

button.addEventListener('click', ()=>{
    p.textContent = 'Bonjour ' + nom.value + ' ' + prenom.value;
});