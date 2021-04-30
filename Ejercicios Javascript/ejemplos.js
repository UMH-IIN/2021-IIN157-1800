

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