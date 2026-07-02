// 1. Escreva um comentário em uma linha
//comentario de uma linha.

// 2. Escreva um comentário em várias linhas
/*
comentario de
varias
linhas
*/

// 3. Declare variáveis com valores correspondentes a todos os tipos de dados primitivos
let letraA = "hello, JScript"
let letraB = 'hello, Html e Css'
let letraC = `hello, World`

let numeroA = 1995
let numeroB = 3.14

let booleanA = true
let booleanB = false

let undefinedA

let neutro = null

let symbol = Symbol("JS")

let grandeA = BigInt(1210201031082012)
let grandeB = 3108201212102010n

// 4. Imprima no console o valor de todas as variáveis
console.log(letraA)
console.log(letraB)
console.log(letraC)
console.log(numeroA)
console.log(numeroB)
console.log(booleanA)
console.log(booleanB)
console.log(undefinedA)
console.log(neutro)
console.log(symbol)
console.log(grandeA)
console.log(grandeB)
// 5. Imprima no console o tipo de todas as variáveis
console.log(typeof letraA)
console.log(typeof letraB)
console.log(typeof letraC)
console.log(typeof numeroA)
console.log(typeof numeroB)
console.log(typeof booleanA)
console.log(typeof booleanB)
console.log(typeof undefinedA)
console.log(typeof neutro)
console.log(typeof symbol)
console.log(typeof grandeA)
console.log(typeof grandeB)

// 6. Em seguida, modifique os valores das variáveis por outros do mesmo tipo
letraA = "testando1"
letraB = 'testando2'
letraC = `testando3`

numeroA = 2026
numeroB = 15

booleanA = false
booleanB = true

undefinedA = "algo aqui"

neutro = null

symbol = Symbol("HtmlCss")

grandeA = BigInt(31082012)
grandeB = 12102010n

// 7. Em seguida, modifique os valores das variáveis por outros de um tipo diferente
letraA = 1
letraB = 23

numeroA = null
numeroB = null

booleanA = "sou texto"
booleanB = "tbm sou texto"

undefinedA = null

neutro = undefined

symbol = 12345678910n

grandeA = Symbol("Htmlcss")
grandeB = 4

// 8. Declare constantes com valores correspondentes a todos os tipos de dados primitivos
const A = "algo"
const B = 10
const C = false
const D = undefined
const E = null
const F = Symbol("lalala")
const G = 20102012n

// 9. Em seguida, tente modificar os valores das constantes
/*
A = "alguma coisa"
B = 13
C = true
D = false
E = true
F = 31081210n
*/

// 10. Comente as linhas que produzem algum tipo de erro ao executar o código