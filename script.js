"use strict";

var n = +prompt("Введите число","");
var k = +prompt("Введите степень");

function pow(n, k){
    var res = 1;
    for (var i = 0; i < k; i++){
        res = res * n;
    }
    return alert(res);
}

if(n >= 1){
    pow(n, k);
}
else{
    alert("Вы ввели не действительное число!");
}