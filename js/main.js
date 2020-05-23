/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/



/*knop die de kleur veranderd*/

/*element selecteren*/
var pop = document.querySelector(".rood-pop");
var button = document.querySelector(".knop");
var button2 = document.querySelector(".knop2");
var blauwLinks = document.querySelector(".blauw_links");
var blauwRechts = document.querySelector(".blauw_rechts");
var groen = document.querySelector(".groen");

/*luisteren naar een event*/
button.addEventListener('click', toggle);


/*css aanpassen, class toevoegen*/
function toggle() {
    pop.classList.toggle('kleur1');
    blauwLinks.classList.toggle('kleur2');
    blauwRechts.classList.toggle('kleur2');
    groen.classList.toggle('kleur3');
    
    console.log("test3");
}

/*knop die pop laat verdwijnen*/

/*luisteren naar een event voor spatiebalk en knop*/
window.addEventListener('keydown',verdwijn);
button2.addEventListener('click',verdwijn2);

/*css aanpassen, class toevoegen*/
function verdwijn(event){
    if (event.keyCode === 32){
        groen.classList.toggle('groen2');
        blauwLinks.classList.toggle('bl');
        blauwRechts.classList.toggle('br');
        pop.classList.toggle('roodpoppetje');
    }
}

function verdwijn2(){
groen.classList.toggle('groen2');
blauwLinks.classList.toggle('bl');
blauwRechts.classList.toggle('br');
pop.classList.toggle('roodpoppetje');  
}
 
