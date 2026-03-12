//Tipos de Variaveis.
'use strict'
// Var: este tipo de variável  pode ser acessada fora do escopo!
var name = 'Roberto'
var name = '19'
if (true) {
  console.log('Name:' + name)
}
console.log('Name:' + name)

// let:este tipo de variável não pode ser acessada fora do escopo!
let Nome = 'Manuel'
if (true) {
  let Nome = 'Bebiano'
  console.log('Nome:' + Nome)
}
console.log('Nome:' + Nome)

// Const: este tipo de variável não pode ser acessada fora do escopo!
const NAME = 'Bellamy'

if (true) {
  const NAME = 'Roberto'
  console.log('NAME:' + NAME)
}
console.log('NAME:' + NAME)
