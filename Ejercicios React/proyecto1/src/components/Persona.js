//seccion de importancion de componentes
import React from "react";

export default function Persona(props){
    var nombre; 
    var apellido;
    var edad;
    var nacionalidad;
    var genero;    
    
    //iniciar variables locales con variables del props
    nombre   = props.nombre; 
    apellido = props.apellido;
    edad     = props.edad;
    nacionalidad = props.nacionalidad;
    genero   = props.genero;   

    //iniciar variables con objeto del props
    console.log(props.personaInfo);
    if(props.personaInfo != undefined){
        nombre   = props.personaInfo.nombre; 
        apellido = props.personaInfo.apellido;
        edad     = props.personaInfo.edad;
        nacionalidad = props.personaInfo.nacionalidad;
        genero   = props.personaInfo.genero;  
    }


    return(
        <div>
            <h2>Datos Personales</h2>
            <table>
                <tbody>
                    <tr> <td>Nombre:    </td>   <td> {nombre} </td>      </tr>
                    <tr> <td>Apellidos: </td>   <td> {apellido}</td>  </tr>
                    <tr> <td>edad:      </td>   <td> {edad}</td>  </tr>
                    <tr> <td>nacionalidad:</td> <td> {nacionalidad}</td>  </tr>
                    <tr> <td>genero:      </td> <td> {genero}</td>  </tr>
                    <tr> <td>
                            <button onClick={ () => props.fnsaludar(nombre) } >Saludar</button>
                    </td> </tr>
                </tbody>
            </table>
        </div>
    )
}

export function Intereses(){

    return(
        <div>
            <h2>Estos son intereses</h2>
        </div>
    )
}
 