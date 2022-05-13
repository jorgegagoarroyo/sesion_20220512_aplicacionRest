import { leerUsuarios } from "./leerUsuarios.js";
import { leerUsuarioId } from "./leerUsuarioId.js";
import { borrarUsuario } from "./borrarUsuario.js";
import {modificarUsuario} from "./modificarUsuario.js";
import {crearUsuario} from "./crearUsuario.js"


const app = ()=>{
    console.log("esto es app")
    const usuarios = leerUsuarios()
    usuarios
    //leerUsuarioId()
    //borrarUsuario()
    //modificarUsuario()
    //crearUsuario()
    document.querySelector("#formulario").addEventListener("submit", crearUsuario)
}

export {app}