'use strict';

function rle(string){
    let counter = 1, result = '';
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i+1]){
            counter++;
        }else{
            result += counter + string[i];
            counter = 1;
        }
    }
    return result;
}

let input = prompt('Введите строку, которую необходимо сжать','');
let res = rle(input);
alert(res);