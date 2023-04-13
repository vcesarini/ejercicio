const HTMLResponse = document.querySelector("#store");
const nuevoDivCol = document.createElement('div');
nuevoDivCol.classList.add('col-12','d-lg-flex');

$.ajax({ method: "GET", url: "https://fakestoreapi.com/products?limit=4" })

    //users: es la RESPUESTA DE LA PETICION
    .done(function (producto) {

        //Mostrar respuesta de API en un componente HTML recorriendo cada usuario
        producto.forEach((elemento) => {

        const elem = document.createElement('div');
            elem.classList.add('col-sm-12','col-md-12','col-lg-3','card');
              elem.innerHTML = `
                            <img src="${elemento.image}" class="card-img-top" alt="${elemento.title}">
                            <div class="card-body">
                                <h5 class="card-title">${elemento.title}</h5>
                                <p class="color-primario">${elemento.category}</p>
                                <p class="card-text control-texto">${elemento.description}</p>
                                <p class="color-primario fw-bolder">Precio: $${elemento.price}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary"><a href="../registrar.html" class="btn btn-cta">COMPRAR</a></small>
                            </div>
                        `;
            nuevoDivCol.appendChild(elem);
        });
        HTMLResponse.appendChild(nuevoDivCol);

    }
    )