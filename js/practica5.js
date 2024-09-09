/* Hacer un CRUD:
    C (create) = ingresar un color por el input.
    R (read) = renderizar el color dentro de la ul en una li.
    U (update) = dentro del li crear un boton para actualizar y hacer que funcione.
    D (delete) = dentro del li crear un boton para eliminar y hacer que funcione.
    
    -Utilizar el localstorage para emular una base de datos donde se guarden los colores y se renderizen.

    -Por ultimo subir la carpeta practicaJs5 a su github personal.
*/
const colores= JSON.parse(localStorage.getItem("colores")) || [];


const registrarColor = () => {
    var color = document.getElementById("color");
    
    localStorage.setItem("colores", JSON.stringify(colores));
    if(localStorage.getItem("color_seleccionado")==null){
        colores.push(color.value);
    } else{
        colores[localStorage.getItem("color_seleccionado")] = color.value;
    }
    localStorage.removeItem("color_seleccionado");
    localStorage.setItem("colores",JSON.stringify(colores));
    color.value = "";
    alert("Color registrado");
    cargarColores();
    location.reload();
}

const cargarColores = () => {
    var cadena="";
    for(i=0;i<colores.length;i++){
        cadena += `
        <div class="list-group-item list-unstyled">
            <li class="d-flex align-items-center justify-content-between">${colores[i]} 
            <div class="text-end">
            <button type="button" onclick="editarColor(${i})" class="btn btn-warning"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button type="button" onclick="eliminarColor(${i})" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </div></li>
        </div>`
        
    }
    document.getElementById("listaColores").innerHTML = cadena;
}

const eliminarColor = (posicion) => {
    colores.splice(posicion, 1);
    localStorage.setItem("colores", JSON.stringify(colores));
    cargarColores();
}

const editarColor = (posicion) => {
    localStorage.setItem("color_seleccionado",posicion);
    location.href="index.html";
}

const setear = () => {
    seleccionado=localStorage.getItem("color_seleccionado");
    if(seleccionado==null||seleccionado>=0||seleccionado==undefined){
        document.getElementById("color").value=colores[seleccionado];
    }
    

}