function Sumar(){
    let valores = obtenerdato();
    let resultado = parseFloat(valores[0]) + parseFloat(valores[1]); 
    resultadofuncion(resultado);
}
function Restar(){
    let valores = obtenerdato();
    let resultado = parseFloat(valores[0]) - parseFloat(valores[1]); 
    resultadofuncion(resultado);
}
function Multiplicar(){
    let valores = obtenerdato();
    let resultado = parseFloat(valores[0]) * parseFloat(valores[1]); 
    resultadofuncion(resultado);
}
function Dividir(){
    let valores = obtenerdato();
    let resultado = parseFloat(valores[0]) / parseFloat(valores[1]); 
    resultadofuncion(resultado);
}

function resultadofuncion(resultado)
{
    if(isNaN(resultado)) /*Se debe comprobar que ambos sean numeros o en este caso que ambos imputs esten completos*/
    {
        resultado = "Complete ambos operandos";
    }
    document.getElementById("res").innerHTML = "Resultado: " + resultado; /*Se modifica el valor del div con innerHTML para modificar el contenido vacio con el resultado */
}
function obtenerdato(){
    const formulariojs = document.getElementById("formulario"); 
    let operandoA = formulariojs["operando1"] ;  
    let opeandoB = formulariojs["operando2"];
    let valor = [operandoA.value,opeandoB.value]
    return(valor);
}


