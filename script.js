let pokemons = [];
let pokemonSecret = {};

let button = document.getElementById('button');
let message = document.getElementById('message');
let form = document.getElementById('form');
const image = document.getElementById("pokemon-image");
const box = document.querySelector(".box");
let button_questions = document.getElementById('button_questions');
const box_questions = document.querySelector(".menu_questions");

let legendaire = document.getElementById('legendaire');
let fossile = document.getElementById('fossile');
let starter = document.getElementById('starter');
let base = document.getElementById('base');
let evol1 = document.getElementById('evol1');
let evol2 = document.getElementById('evol2');
let maxEvol = document.getElementById('maxEvol');

const audio1 = document.querySelectorAll(".sound1");
const audioElement1 = new Audio("sound/plink.mp3"); 

const audio2 = document.querySelector(".sound2");
const audioElement2 = new Audio("sound/win.mp3"); 

const audio3 = document.querySelectorAll(".sound3");
const audioElement3 = new Audio("sound/no.mp3"); 


// Charger le fichier JSON
fetch("pokemons_avec_types.json")
    .then(response => response.json())
    .then(data => {
        pokemons = data;

        // Choisir un Pokémon aléatoire
        pokemonSecret =
            pokemons[Math.floor(Math.random() * pokemons.length)];

        
        console.log("Pokémon choisi :", pokemonSecret.nom);

        //Variable image résultat final
        image.src =
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonSecret.num}.png`;


    });

    button.onclick = function(){
        const input = document.getElementById("input");
        //pokemonSecret.nom.trim().toLowerCase();
        if(input.value != ""){

            if(input.value != pokemonSecret.nom){
                message.innerText = 'Mauvaise réponse';
                message.style.color = "red";
                audioElement3.currentTime = 0.1;
                audioElement3.play();
            }

            if(input.value == pokemonSecret.nom){
                message.innerText = 'Bonne réponse';
                message.style.color = "green";
                audioElement2.currentTime = 0.15;
                audioElement2.play();
                button.innerText = 'Rejouer';
                button_questions.style.display = "none";
                input.style.display = "none";
                box.classList.remove("box_start");
                box.classList.add("box_end");
                box_questions.classList.add("hidden");
            
                    button.addEventListener('click', function () {
                        //audioElement1.currentTime = 0.2;
                        //audioElement1.play();
                        location.reload();
                    });
            
                };

            }else{
            message.innerText = "Le champ est vide";
            message.style.color= "red";
            audioElement3.currentTime = 0.1;
            audioElement3.play();
            };

        }

        //document.querySelector('#button').addEventListener('keydown', function (){

        //})
  
        //-------------PANNEAU QUESTIONS--------------//

        document.querySelector('#button_questions').addEventListener('click', function () {
            if (box_questions.classList.contains("hidden")) {
                    box_questions.classList.remove("hidden");
                    box_questions.classList.add("visible");

            } else {
                    box_questions.classList.remove("visible");
                    box_questions.classList.add("hidden");
            }
        });


        //-------------ALGO NOMBRE TYPES--------------//

        document.getElementById("nombreType").addEventListener("click", function(e) {

            e.preventDefault();

                let nombre = 1;
                
            if (pokemonSecret.type2 && pokemonSecret.type2 !== "") {
            nombre = 2;
            message.innerText = "2 types";
            message.style.color= "black";
            }else{
                message.innerText = "1 type";
                message.style.color= "black";
            }
         
        });

        //-------------ALGO CHOIX TYPES--------------//

        document.querySelectorAll(".imgType").forEach(function(img) {
            img.addEventListener("click", function(e) {

                e.preventDefault(); // évite le comportement du <a>

                console.log(img.id);

                const type1 = pokemonSecret.type1;
                const type2 = pokemonSecret.type2;

                if(img.id == type1 || img.id == type2){
                    message.innerText = 'Oui';
                    message.style.color= "green";
                }else{
                    message.innerText = "Non";
                    message.style.color= "red";
                }
            });
        });

        //-------------SOUND DESIGN--------------//

        document.querySelectorAll(".sound1").forEach(function(el) {
            el.addEventListener("click", function () {
                audioElement1.currentTime = 0.2;
                audioElement1.play();
            });
        });

        //-------------ALGO LEGENDAIRE--------------//

        document.getElementById("legendaire").addEventListener("click", function(e) {

            e.preventDefault();
                
            if (pokemonSecret.legendaire == "oui") {
            message.innerText = "Oui";
            message.style.color= "black";
            }else{
                message.innerText = "Non";
                message.style.color= "black";
            }
         
        });

        //-------------ALGO FOSSILE--------------//

        document.getElementById("fossile").addEventListener("click", function(e) {

            e.preventDefault();
                
            if (pokemonSecret.fossile == "oui") {
            message.innerText = "Oui";
            message.style.color= "black";
            }else{
                message.innerText = "Non";
                message.style.color= "black";
            }
         
        });

        //-------------ALGO STARTER--------------//

        document.getElementById("starter").addEventListener("click", function(e) {

            e.preventDefault();
                
            if (pokemonSecret.starter == "oui") {
            message.innerText = "Oui";
            message.style.color= "black";
            }else{
                message.innerText = "Non";
                message.style.color= "black";
            }
         
        });

        //-------------ALGO BASE--------------//

        document.getElementById("base").addEventListener("click", function(e) {

            e.preventDefault();
                
            if (pokemonSecret.stadeEvol == "base") {
            message.innerText = "Oui";
            message.style.color= "black";
            }else{
                message.innerText = "Non";
                message.style.color= "black";
            }
         
        });

        //-------------ALGO EVOL1--------------//

        document.getElementById("evol1").addEventListener("click", function(e) {

            e.preventDefault();
                
            if (pokemonSecret.stadeEvol == "evol1") {
            message.innerText = "Oui";
            message.style.color= "black";
            }else{
                message.innerText = "Non";
                message.style.color= "black";
            }
         
        });

        //-------------ALGO EVOL2--------------//

        document.getElementById("evol2").addEventListener("click", function(e) {

            e.preventDefault();
                
            if (pokemonSecret.stadeEvol == "evol2") {
            message.innerText = "Oui";
            message.style.color= "black";
            }else{
                message.innerText = "Non";
                message.style.color= "black";
            }
         
        });

        //-------------MAX EVOL2--------------//

        document.getElementById("maxEvol").addEventListener("click", function(e) {

            e.preventDefault();
                
            if (pokemonSecret.maxEvol == "evol2") {
            message.innerText = "2 évolutions";
            message.style.color= "black";
            }
            if (pokemonSecret.maxEvol == "evol1") {
            message.innerText = "1 évolution";
            message.style.color= "black";
            }else{
                message.innerText = "Aucune évolution";
                message.style.color= "black";
            }
         
        });

            


    
