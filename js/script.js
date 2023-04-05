/* LLAMADA AJAX */

const HTMLResponse = document.querySelector("#app");
const templateUL = document.createElement(`ul`);

$.ajax({ method: "GET", url: "http://jsonplaceholder.typicode.com/users" })
    .done(function (users) {
        //Mostrar por consola la respuesta de la API
        console.log(users)

        //Mostrar respuesta de API en un componente HTML
        //document.getElementById("response").innerHTML = users;

        //Mostrar respuesta de API en un componente HTML recorriendo cada usuario
        users.forEach((users) => {
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`Nombre: ${users.name}, Email: ${users.email}`)
            );
            templateUL.appendChild(elem);
        });
        HTMLResponse.appendChild(templateUL);

    }
    );

/* LLAMADA AJAX */