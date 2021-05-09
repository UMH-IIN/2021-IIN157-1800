//seccion de importancion de componentes
import React from "react";

export default function Persona(props){

    console.log(props);

    return(
        <div>
            <h2>Datos Personales</h2>
            <table>
                <tbody>
                    <tr> <td>Nombre:    </td>   <td> {props.personaInfo.nombre} </td>      </tr>
                    <tr> <td>Apellidos: </td>   <td> {props.personaInfo.apellido}</td>  </tr>
                    <tr> <td>edad:      </td>   <td> {props.personaInfo.edad}</td>  </tr>
                    <tr> <td>nacionalidad:</td> <td> {props.personaInfo.nacionalidad}</td>  </tr>
                    <tr> <td>genero:      </td> <td> {props.personaInfo.genero}</td>  </tr>
                    <tr> <td>
                            <button onClick={ () => props.fnsaludar(props.personaInfo.nombre) } >Saludar</button>
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