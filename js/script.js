const movPag=document.querySelector(" .movPag");
const btn_adelante2 = document.querySelector(".sigPag");
const btn_atras1=document.querySelector(" .volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_adelante4 = document.querySelector(".adelante-pag4");
const btn_atras2=document.querySelector(" .volver-pag2");

const btn_atras3=document.querySelector(" .volver-pag3");
const btn_final=document.querySelector(" .fin");

const progressText= document.querySelectorAll(" .paso p");
const progressCheck= document.querySelectorAll(" .paso .check");
const Num= document.querySelectorAll(" .paso .num");

/* max = numero de pagina */

let max=4;
let cont=1
  //botones de avance
btn_adelante2.addEventListener("click", function(e){

    e.preventDefault();

    var nombre=document.getElementById("nombres").value;


    /* Control de errores */

    if(nombre==""){
document.getElementById("nombres-error").innerHTML="este campo no puede quedar vacio."
document.getElementById("nombres").style.borderColor="red";
    }else{
        document.getElementById("nombres-error").innerHTML=""
        document.getElementById("nombres").style.borderColor="lightgrey";

    movPag.style.marginLeft="-25%";
    /* movimiento de progress bar */
    Num [cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont +=1;
}
});



btn_adelante3.addEventListener("click", function(e){

    e.preventDefault();
    movPag.style.marginLeft="-50%";
    Num [cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont +=1;
});
btn_adelante4.addEventListener("click", function(e){

    e.preventDefault();
    movPag.style.marginLeft="-75%";
    Num [cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont +=1;
});
btn_final.addEventListener("click", function(e){

    e.preventDefault();
    Num [cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont +=1;
  alert("aqui finaliza el registro");
});
btn_atras1.addEventListener("click", function(e){

    e.preventDefault();
    movPag.style.marginLeft="0%";
    Num [cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -=1;

});
btn_atras2.addEventListener("click", function(e){

    e.preventDefault();
    movPag.style.marginLeft="-25%";
    Num [cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -=1;
});
btn_atras3.addEventListener("click", function(e){

    e.preventDefault();
    movPag.style.marginLeft="-50%";
    Num [cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -=1;
});

/* FAKE STORE */

const fakeStore = document.querySelector('#store')
const producto = fetch('https://fakestoreapi.com/products?limit=4');

producto.then(res => res.json())
        .then(data => {
            for (const elemento of data) {
                const nuevoDiv = document.createElement('div');
                nuevoDiv.classList.add('card');
                nuevoDiv.innerHTML = `
                    <img src="${elemento.image}" class="card-img-top" alt="${elemento.title}">
                    <div class="card-body">
                      <h5 class="card-title">${elemento.title}</h5>
                      <p>${elemento.category}</p>
                      <p class="card-text">${elemento.description}</p>
                      <p>Precio: $${elemento.price}</p>
                        <a href="#" class="btn btn-primary">COMPRAR</a>
                    </div>
                `;
                fakeStore.appendChild(nuevoDiv)
            }
        });