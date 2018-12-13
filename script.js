"use strict";

var n = +prompt("Введите число","");

function sum(n){
    var sum = 0;
    for(var i = 0; i <= n; i++){
        sum += i;
    }
    alert(sum);
}

function sum1(n){
    if(n != 0){
        return n + sum1(n-1)
    }
    else{
        return n;
    }
}

sum(n);
alert(sum1(n));