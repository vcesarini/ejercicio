const movPag=document.querySelector(" .movPag");
const btn_adelante2 = document.querySelector(".sigPag");
const btn_atras1=document.querySelector(" .volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_adelante4 = document.querySelector(".adelante-pag4");
const btn_atras2=document.querySelector(" .volver-pag2");
const cancelar = document.querySelector(".btn-cancelar");
const btn_atras3=document.querySelector(" .volver-pag3");
const btn_final=document.querySelector(" .fin");
//const btn_resumen=document.querySelector(" .resumen");
const progressText= document.querySelectorAll(" .paso p");
const progressCheck= document.querySelectorAll(" .paso .check");
const Num= document.querySelectorAll(" .paso .num");
//GUARDAR DATOS.
var newUser="";

/* max = numero de pagina */

let max=4;
let cont=1

//boton cancelar 

cancelar.addEventListener("click", function(e){
    e.preventDefault();
    
    Swal.fire({
      title: '¿Estás seguro de querer salir?',
      text: "Se perderán los datos, si es que ya llenó algunos.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, deseo salir.'
    }).then((result) => {
      if (result.value) {
        location.href="index.html"
      }
    })
  });
  //botones de avance
btn_adelante2.addEventListener("click", function(e){
  
    e.preventDefault();
    
    var nombre=document.getElementById("nombres").value;
    var apellido=document.getElementById("apellido1").value;
    
    /* Control de errores */

    if(nombre ==""){
document.getElementById("nombres-error").innerHTML="este campo no puede quedar vacio."
document.getElementById("nombres").style.borderColor="red";
    }else if( apellido ==""){
document.getElementById("apellido1-error").innerHTML="este campo no puede quedar vacio."
document.getElementById("apellido1").style.borderColor="red";
    }else{
        document.getElementById("nombres-error").innerHTML=""
        document.getElementById("nombres").style.borderColor="lightgrey";
        document.getElementById("apellido1-error").innerHTML=""
        document.getElementById("apellido1").style.borderColor="lightgrey";  
    movPag.style.marginLeft="-25%";
    /* movimiento de progress bar */ 
    Num [cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont +=1;
    }
}

     
);
  


btn_adelante3.addEventListener("click", function(e){
    
    e.preventDefault();
    var sexo=document.getElementById("sexo").value;
    var fechaNac=document.getElementById("FechaNac").value;
    if(sexo == -1){
        document.getElementById("sexo-error").innerHTML="este campo no puede quedar vacio."
        document.getElementById("sexo").style.borderColor="red";
            }else if ( fechaNac=="" ){
                document.getElementById("FechaNac-error").innerHTML = "* Seleccione una fecha."
                document.getElementById("fechaNac").style.borderColor="#DA2A33" 
            }    else{
                document.getElementById("FechaNac-error").innerHTML = ""
                document.getElementById("FechaNac").style.borderColor="lightgrey" 
                document.getElementById("sexo-error").innerHTML=""
                document.getElementById("sexo").style.borderColor="lightgrey";
               
    movPag.style.marginLeft="-50%"; 
    Num [cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont +=1;
}});
btn_adelante4.addEventListener("click", function(e){
    
    e.preventDefault();
    var Email=document.getElementById("Email").value;
    var NumCel=document.getElementById("NumCel").value;
    
    /* Control de errores */

    if(Email=="" || 
    !verificarCorreo(Email)){
document.getElementById("Email-error").innerHTML="este campo no puede quedar vacio."
document.getElementById("Email").style.borderColor="red";
    }else if(  NumCel=="" || NumCel.length<=8|| !verificarNumCel( NumCel)){
document.getElementById("NumCel-error").innerHTML="este campo no puede quedar vacio."
document.getElementById("NumCel").style.borderColor="red";
    }else{
        document.getElementById("Email-error").innerHTML=""
        document.getElementById("Email").style.borderColor="lightgrey";
        document.getElementById("NumCel-error").innerHTML=""
        document.getElementById("NumCel").style.borderColor="lightgrey";  
    
    movPag.style.marginLeft="-75%"; 
    Num [cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont +=1;
}
function verificarCorreo($n){
    var ExpRegular_Correo = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return ExpRegular_Correo.test($n);

/*     if ($n.match(ExpRegular_Correo)){
      return true
    }else{
      return false;
    } */

  }

  function verificarNumCel($m){
    var ExpRegular_Num = /^[\d]+$/;
    return ExpRegular_Num.test($m);
  }
}) ;
btn_final.addEventListener("click", function(e){
    
    e.preventDefault();
    var usuario=document.getElementById("usuario").value;
    var password=document.getElementById("Contra").value;
    if(usuario ==""){
        document.getElementById("usuario-error").innerHTML="este campo no puede quedar vacio."
        document.getElementById("usuario").style.borderColor="red";
            }else if( password ==""){
        document.getElementById("Contra-error").innerHTML="este campo no puede quedar vacio."
        document.getElementById("Contra").style.borderColor="red";
            }else{
                document.getElementById("usuario-error").innerHTML=""
                document.getElementById("usuario").style.borderColor="lightgrey";
                document.getElementById("Contra-error").innerHTML=""
                document.getElementById("Contra").style.borderColor="lightgrey";  
    Num [cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont +=1;
 
  setTimeout(function(){
    
    let timerInterval;
    Swal.fire({

      allowOutsideClick: false,
      allowEscapeKey: false,
      stopKeydownPropagation: false,

      title: 'Realizando registro...',
      timer: 1000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerRight()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          title: '¡ATENCIÓN!',
          html: "Al continuar con el registro, <br>usted acepta los términos y condiciones.",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, continuar.',
          footer: '<a href="termCond.html" target="_blank">Ver términos y condiciones.</a>'
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              icon: 'success',
              title: '¡Enhorabuena!',
    
              html: 'El usuario: <br>' +
                    '<b style="color: #0E2C48; font-size: px;";>' + 
                    newUser +'</b><br> Ha sido registrado con éxito.',
    
              confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> ACEPTAR',
              allowOutsideClick: false,
              allowEscapeKey: false,
              stopKeydownPropagation: false  
            }
            ).then((result) => {
              if (result.value) {
                limpiar();
                location.reload();            
              }
            })
          }else {
            cont -= 1;
          }
        })
      }
    });    
  });

}

function verificarUsuario($n){
    var ExpRegular_Correo = /^[a-zA-Z][a-zA-Z0-9_]{3,9}$/;
    return ExpRegular_Correo.test($n);
  }

  function verificarContra($m){
    var ExpRegular_Num = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/; /* al menos un dígito, al menos una minúscula y al menos una mayúscula. */
    return ExpRegular_Num.test($m);
  }
  function limpiar(){
    document.getElementById("nombres").value = "";
    document.getElementById("apellido1").value = "";
  
    document.querySelector('input[type="date"]').value = "10/12/2010";
    document.getElementById("sexo").value = -1;
    document.getElementById("Email").value = "";
    document.getElementById("NumCel").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("Contra").value = "";
  }});
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

/*btn_resumen.addEventListener("click", function(e){
    
  e.preventDefault();
  let nombre = document.getElementById("nombres").value;
  let apellido = document.getElementById("apellido").value;
 let FechaNac= document.getElementById("FechaNac").value
 let Email=document.getElementById("Email").value
  let telefono = document.getElementById("NumCel").value;
  let sexo = document.getElementById("sexo").value;
  Swal.fire(
    'Revisar si los datos son correctos:?',
    //icon: 'info',
    `Nombre: ${nombre}  ${apellido} , Telefono: ${telefono}  , Fecha Nacimiento: ${FechaNac} , Email: ${Email}  `,
  )
});*/


function formulario() {
  let nombre = document.getElementById("nombres").value;
  let apellido = document.getElementById("apellido1").value;
 let FechaNac= document.getElementById("FechaNac").value
 let Email=document.getElementById("Email").value
  let telefono = document.getElementById("NumCel").value;
  let sexo = document.getElementById("sexo").value;
  Swal.fire(
    'Revisar si los datos son correctos:?',
    //icon: 'info',
    `Nombre: ${nombre}  ${apellido} , Telefono: ${telefono}  , Fecha Nacimiento: ${FechaNac} , Email: ${Email}  `,
   
   
     
      
      
  )
  
};

/* FAKE STORE */

// const fakeStore = document.querySelector('#store')
// const producto = fetch('https://fakestoreapi.com/products?limit=4');

// producto.then(res => res.json())
//         .then(data => {
//             for (const elemento of data) {
//                 const nuevoDiv = document.createElement('div');
//                 nuevoDiv.classList.add('card');
//                 nuevoDiv.innerHTML = `
//                     <img src="${elemento.image}" class="card-img-top" alt="${elemento.title}">
//                     <div class="card-body">
//                       <h5 class="card-title">${elemento.title}</h5>
//                       <p>${elemento.category}</p>
//                       <p class="card-text">${elemento.description}</p>
//                       <p>Precio: $${elemento.price}</p>
//                         <a href="#" class="btn btn-primary">COMPRAR</a>
//                     </div>
//                 `;
//                 fakeStore.appendChild(nuevoDiv)
//             }
//         });