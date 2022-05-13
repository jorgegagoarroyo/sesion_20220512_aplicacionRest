const leerUsuarios = async ()=>{
    console.log("leer usuarios")

    const uri = "http://localhost:6969/api/usuarios"
    try{
        const peticionUsuarios = await fetch(uri, {
            method:"GET"
        })
        const datos = await peticionUsuarios.json()
        console.log(datos)
        //inyectamos datos en html
        var html = `
        <table class="table">
            <tr>
                <th>Nombre</th><th>Apellidos</th><th>Email</th>
        `
        datos.forEach( usuario => {
            html +=`
                <tr>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellidos}</td>
                    <td>${usuario.email}</td>
                </tr>
            `
        });

        html += `
        </table>`
        document.querySelector(".listaUsuarios").innerHTML = html
    }catch(error){
        console.log("error en fetch leer Usuarios "+ error)
    }

}

export {leerUsuarios}