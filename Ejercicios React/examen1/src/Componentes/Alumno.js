import React from "react";
import Asignatura from "../Componentes/Asignatura";

export default function Alumno(props){

    var nombre;
    var identidad;
    var nacimiento;
    var promedio;

    identidad = props.personalInfo.identidad;
    nombre = props.personalInfo.nombre;
    nacimiento = props.personalInfo.nacimiento;

    promedio = (props.personalInfo.notas[0]+props.personalInfo.notas[0]+props.personalInfo.notas[2])/3;


    return (
        <div  >  
            <table border="1">
                <tbody>
                    <tr> <td>Identidad:</td>        <td>{identidad} </td></tr>
                    <tr> <td>Nombre Completo:</td>  <td>{nombre}    </td></tr>
                    <tr> <td>Nacimiento:</td>       <td>{nacimiento}</td></tr> 
                    <tr> <td>Nota Promedio:</td>     <td>{promedio}</td></tr> 
                </tbody> 
            </table>  
            <br></br> 
        </div>
    )
}
