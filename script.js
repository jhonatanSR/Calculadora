let operador = "";
let valor1 = 0;
let valor2 = 0;
const display = document.getElementById("display");

function atualizarDisplay(btn){
        if(display.value.length === 9) return;
        if(display.value==='0'){
            display.value=btn.value;
        }else display.value += btn.value;
}

function limpar(){
    display.value = "0";
    valor1 = 0;
    operador = "";
}

function guardarOperador(btn){
    operador = btn.value;
    valor1 = parseInt(display.value);
    display.value = "0";

}

function resultado(btn){
    valor2 = parseInt(display.value);
    valor1 = eval(valor1+operador+valor2);
    display.value = valor1;
    operador = "";

}

function teclado(){
    if(/[0-9]/.test(event.key))
    atualizarDisplay({value: event.key});
    
}
