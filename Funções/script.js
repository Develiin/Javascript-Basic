// Tipos de função

function media(n1, n2) {
  var nota1 = n1
  var nota2 = n2
  var media = (nota1 + nota2) / 2

  return media
  // Uma função que contém dentro uma variavel
}

var resultado = media(6, 10)
console.log(resultado)

// Função anonima é uma estrutura que não precisa ser declarada

// ESTRUTURA A SER USADA () => {}

var media = (n1, n2) => {
  return (n1, n2) / 2
}
