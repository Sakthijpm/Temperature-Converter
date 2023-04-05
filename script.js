
let celsius=document.getElementById("Celsius")
let fahrenheit=document.getElementById("Fahrenheit")

function CelToFar(){
    let output=(parseFloat(Celsius.value)*9/5)+32;
    fahrenheit.value=parseFloat(output.toFixed(2));
}
function FarToCel(){
    let output=(parseFloat(Fahrenheit.value)-32)*5/9;
    celsius.value=parseFloat(output.toFixed(2));
    console.log(output)
}