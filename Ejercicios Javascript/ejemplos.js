

function inicio(){
    console.log("Hola mundo");
    alert("Este es un mensaje");
}

function suma(){
    var a = "Hola";
    var b = "Mundo";
    var c;
    
    c = a+b;

    console.log(a+b);

    var persona = {
        numId:"1234",
        nombre:"Jose",
        apellido:"Perez",
        edad:"20"
    }

    console.log(persona);
    console.log(persona.numId);
    console.log(persona.nombre);

    var paises = ["Honduras","Nicaragua","Belice"];

    console.log('********** ciclo for **********');

    for(var i = 0; i<3; i++){
        console.log(paises[i]);
    }

    var stop = 0;
    while(stop < 3){
        console.log(paises[stop]);
        stop +=1;
    }

    /*
        condiciones if 
    */

    if(stop == 0){
        alert("Variable sin incremento");
    }else{
        console.log("Se incremento hasta: "+stop);
        console.log(stop);
    }
}

function cargarFormulario(){

    document.getElementById("formulario").innerHTML =   '<h4 class="card-title">Registrar usuario</h4> '+
    '<form>'+
    '<div class="form-row"> '+
    '    <label for="txtcorreo" id="lblcorreo">Correo electronico</label> '+
    '    <input type="text"   id="txtcorreo" name="txtcorreo" class="form-control" placeholder="algo@gmail.com">  '+
    '</div><br>'+
    '<div class="form-row"> '+
        '    <label >Nombres</label><input type="text" id="txtnombres" name="txtnombres" class="form-control" placeholder="Tu nombre">  '+
        '</div>'+
        '<div class="form-group">'+
    '    <label >Apellidos</label><input type="text" id="txtapellidos" name="txtapellidos" class="form-control">'+
    '</div> '+ 
    '<button class="btn btn-success" > Registrar</button> '+
    "</form> ";

}