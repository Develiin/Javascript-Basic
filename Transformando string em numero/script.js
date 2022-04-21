 //QUANDO QUER TRANSFORMAR UMA STRING EM UM NÚMERO inteiro SE USA parseInt ou em um número decimal se USA parseFloat

 /*Quando se tem uma string que são " " ela entende que é pra concatenar que significa juntar, então ao invez de somar 3 + 6 ela junta os dois formando 36
Para pode fazer ela sem concatenar ao invés de colocar  assim var c = a +b  coloca-se ASSIM var c = parseInt(a) + parseInt(b) ADICIONANDO o parseInt e a variavel */


var a = "3";  
var b = "6"; 

var c = parseInt(a) +parseInt(b)

/*
    parseInt é para transformar uma string em um número inteiro
*/

console.log(c);



var a = "5.6";

var b = "4.5"

var c = parseFloat(a) + parseFloat(b)

 /* 
    parseFloat é para tranformar uma string num número decimal
 
 */

console.log(c)