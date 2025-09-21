const botonAbrir=document.getElementById('botonAbrir');
const botonCerrar=document.getElementById('botonCerrar');
const overlay=document.getElementById('modalOverlay');
const mensajeSorpresa=document.getElementById('mensajeSorpresa');

const mensajes=[
    "👀 El que tiene tienda que la atienda",
    "😅 Camarón que se duerme, se lo lleva la corriente",
    "🛵 El que no arriesga un huevo, no saca un pollo",
    "📦 Más perdido que turco en la neblina",
    "🤯 Más enredado que marrano en tienda",
    "🥵 El que mucho abarca, poco aprieta",
    "🧢 A lo hecho, pecho",
    "🍲 Barriga llena, corazón contento",
    "🥔 Más aburrido que un mico en un bonsái",
    "😂 El que ríe de último, ríe mejor",
    "🧉 Hierba mala nunca muere",
    "🧠 Más sabe el diablo por viejo que por diablo",
    "🏃 El vivo vive del bobo y el bobo de su trabajo",
    "🌧️ Después de la tormenta, siempre sale el arcoíris",
    "😎 Al mal tiempo, buena cara",
    "🐓 No hay mal que dure cien años ni cuerpo que lo resista"

]

function mostrarModal(){
    const aleatorio=Math.floor(Math.random()*mensajes.length);
    mensajeSorpresa.textContent=mensajes[aleatorio];

    overlay.classList.add('visible');

    document.body.style.overflow='hidden';

    const foco=overlay.querySelector('.modal button, .modal a, .modal input');
    if(foco)foco.focus();
}

function ocultarModal(){
    overlay.classList.remove('visible');
    document.body.style.overflow='';
    botonAbrir.focus();
}

botonAbrir.addEventListener('click',mostrarModal);
botonCerrar.addEventListener('click',ocultarModal);

overlay.addEventListener('click',function(e){
    if(e.target===overlay){
        ocultarModal();
    }
});

document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&& overlay.classList.contains('visible')){
       ocultarModal(); 
    }
});