//--------------------------------------------------------
//  1 UZDUOTIS
//--------------------------------------------------------
// function suma(a,b){
//     return a+b;
// }
//
// console.log("Suma yra " + suma(2,2));

//--------------------------------------------------------
//   2 UZDUOTIS
//--------------------------------------------------------
// function arPenki(y){
//     x = document.getElementById("testas").innerHTML;
//
//     if(parseInt(x) == 5){
//         return parseInt(x)+y;
//     }
//     else{
//         console.log("Ne 5");
//     }
// }
//
// console.log(arPenki(3));
//--------------------------------------------------------
//   3 UZDUOTIS
//--------------------------------------------------------
var xx = '';

function gautiTeksta(){
    if (xx == ''){
        xx = document.getElementById('rezultatas').innerHTML;
    }
    return xx;
}

function gauti(input){
   var x = document.getElementById(input).value;
   var y = parseInt(x);
   document.getElementById(input).value = "";
   return y;
}

function rodytiAtsakyma(rez){
    var ats = gautiTeksta();
    document.getElementById("rezultatas").innerHTML = ats + " " + rez;
}

function sudeti(){
    var a = gauti("A");
    var b = gauti("B");
    rodytiAtsakyma(a+b);
}

function atimti(){
    var a = gauti("A");
    var b = gauti("B");
    rodytiAtsakyma(a-b);
}

function dauginti(){
    var a = gauti("A");
    var b = gauti("B");
    rodytiAtsakyma(a*b);
}

function dalinti(){
    var a = gauti("A");
    var b = gauti("B");
    if(b == 0){
        rodytiAtsakyma("Dalyba is 0 negalima");
    }
    else{
        rodytiAtsakyma(a/b);
    }
}
