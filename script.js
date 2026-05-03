let pokemons = [];
let pokemonSecret = {};

let button = document.getElementById('button');
let message = document.getElementById('message');
let form = document.getElementById('form');
const image = document.getElementById("pokemon-image");
const box = document.querySelector(".box");
let button_questions = document.getElementById('button_questions');
const box_questions = document.querySelector(".menu_questions");
let nombreType = document.getElementById('nombreType');


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
            }

            if(input.value == pokemonSecret.nom){
                message.innerText = 'Bonne réponse';
                message.style.color = "green";
                button.innerText = 'Rejouer';
                button_questions.style.display = "none";
                input.style.display = "none";
                box.classList.remove("box_start");
                box.classList.add("box_end");
                box_questions.classList.add("hidden");
            
                    button.addEventListener('click', function () {
                        location.reload();
                    });
            
                };

            }else{
            message.innerText = "Le champ est vide";
            message.style.color= "red";

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
            }else{message.innerText = "1 type";}
         
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
            

    
