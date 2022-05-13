import { leerUsuarios } from "./leerUsuarios.js"

const crearUsuario = async (event)=>{
    event.preventDefault()

    console.log("crear usuario")
    
    try{
        const dato = {
            nombre: document.querySelector("#nombre").value,
            apellidos: document.querySelector("#apellidos").value,
            email:document.querySelector("#email").value
        }

        console.log("datos: "+ dato)

        const uri = "http://localhost:6969/api/usuarios"
        const usuarioNuevo = await fetch(uri, {
            method:"POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(dato),
        })
        leerUsuarios()
    }catch(error){
        console.log("error en crear usuario: "+error)
    }

}


export { crearUsuario}