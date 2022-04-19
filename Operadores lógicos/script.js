// && e
// || ou
// Negativo

/*
    var a = false;
    var b = false

    var c = a && b;

    console.log(c);

*/    

// PRA ISSO QUE FUNCIONA esse elemento && que significa E
// Basta uma das variaveis serem falsas para ela retornar falsa, só irá ser verdadeiro se as duas forem verdadeiro

var idade = 20;

var maior20 = idade >= 20;
var menor30 = idade <= 30;

var entre = maior20 && menor30;


console.log("idade",idade);

console.log("Maior que vinte", maior20);

console.log("Menor que trinta",menor30);

console.log("Entre 20 e 30", entre);



// PRA ISSO QUE FUNCIONA esse elemento || significa ou
// Na pratica se um dos dois for verdadeiro ele é verdadeiro só vai ser falso se os dois forem falsos

var idade = 9;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidade = menor10 || maior65;


console.log("idade",idade);

console.log("Maior que 65", maior65);

console.log("Menor que 10",menor10);

console.log("Tem direito a gratuidade", gratuidade);


/* PRA ISSO QUE FUNCIONA esse elemento // que significa ou */
 // Sempre que uma variavel for verdadeira a outra será automaticamente falsa

var idade = 35;

var maior20 = idade >= 20;
var menor20 = idade < 20;

console.log("Maior que vinte",maior20);
console.log("Menor que vinte",menor20);
