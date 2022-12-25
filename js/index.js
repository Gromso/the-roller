

 const button = document.getElementById("button");


 function calculation(){
    var redius = document.getElementById("radius")
    var height = document.getElementById("height")
    var print = document.getElementById("print")


    var r = Number(redius.value)
    var h = Number(height.value)
    var PI = 3.141;

     print.innerText =  r*r*PI*h;

 }


 button.onclick = calculation;