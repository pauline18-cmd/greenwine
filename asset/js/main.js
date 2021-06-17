function myFunction() {
    alert('JE SUIS PLUS RICHE QUOI TOI EDDY MUAHHHHHHHHHHAHHHHHHHAAAAAAAAAAAAHAHHHHHHHHHH !');
    alert('ET NON C EST TOUJOURS PAS FERME AHAHAHAHA');
    alert('ESSAYE ENCORE TUDUDUDUUUU');
}
let id = document.getElementById('btn');
id.onclick=function(){
    let names = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    let email = document.getElementById('email').value;
    if(names === '' || tel === '' || email === ''){
        alert('les champs ou un des champ est vide merci de completer :p')
    }else{
        alert('Bonjour nous avons bien reçu vos coordonnées et votre message en cas de soucis nous vous recontacterons.')
    }
};