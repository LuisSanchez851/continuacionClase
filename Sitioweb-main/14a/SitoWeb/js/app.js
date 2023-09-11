'use strict';
const buscando = document.getElementById('buscando');
const inputBuscar = document.getElementById('input_buscar');
const listado = document.getElementById('listPrice');
const tem = document.getElementById('template').content;
//const fragment = document.createDocumentFragment();
const fragment = new DocumentFragment();
const btnEnviar = document.getElementById('btnSend');
const form = document.getElementById('form');

//Onjeyo validacion
const formValid = {
    nombre: false, 
    apellidos: false,
    mail: false,
    cellPhones: false,
    politica: false
}


btnEnviar.addEventListener('click',(e) => {
    e.preventDefault();
});

form.addEventListener('change',(e) =>{
    const inputId = e.target.id;
    console.log(inputId);
});


buscando.addEventListener('click',(e)=>{
    if(input_buscar.classList.contains('buscar0culto')){
        input_buscar.classList.remove('buscar0culto');
        input_buscar.classList.add('buscarVisible');
    }else if(input_buscar.classList.contains('buscarVisible')){
        input_buscar.classList.remove('buscarVisible');
        input_buscar.classList.add('buscar0culto');
        }
    }
);
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const upButtons = document.querySelectorAll(".up");
    upButtons.forEach(function(button) {
        button.addEventListener("click", scrollToTop);
    });

async function obtenerLista(){
    const respuesta =  await axios
                        .get("https://pokeapi.co/api/v2/pokemon")
                        .then((response) => {
                            const resultado = response.data.results;
                            let poke = [];
                            for(const i in resultado){
                                poke.push(resultado[i]);   
                            }
                            console.log(poke);
                            return poke;
                        })
                        .catch((error) => {
                            console.error(error);
                            return 0; 
                        });
    return respuesta;

}
const data = await obtenerLista();
console.log(data);
const comprobarTem = "content" in document.createElement("template"); 
if (comprobarTem){
    data.forEach(element =>{
        tem.querySelector('#code').innerHTML = `Codigo${element.name}`;
        tem.querySelector('a').innerHTML = `${element.url}` ;
        const myElemet = tem.cloneNode(true);
        fragment.appendChild(myElemet);
    }
    );
}
listado.appendChild(fragment);