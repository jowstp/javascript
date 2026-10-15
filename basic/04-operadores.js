//operações

let a = 5
let b = 4

console.log(a + b) //soma
console.log(a - b) //subtração
console.log(a * b) //multiplicação
console.log(a / b) //divisão
console.log(a % b) //modulo
console.log(a ** b) //expoente

//incremento
a++
console.log(a)

//decremento
b--
console.log(b)

//asignacion

c = 15 
c += 5
console.log(c)
/*

+=
-=
*=
/=
%=
**=

*/

//comparação
console.log(a == b)
console.log(a >= b)
console.log(a <= b)
console.log(a > b)
console.log(a < b)
console.log(a === 6)
console.log(a === "6")
console.log(a != "6")
console.log(a !== "6")

//operadores logicos//

//and (e (todas as condições devem ser verdadeiras)) &&
console.log(10 > 5 && 15 > 7)
console.log(15 > 20 && 15 > 7)
console.log(9 > 10 && 15 > 7)
console.log(10 < 5 && 15 < 7 && 10 > 5)

//or (ou (ter pelo menos uma condição verdadeira)) ||
console.log(10 > 5 || 7 > 9)
console.log(9 > 10 || 15 > 20)
console.log(10 > 6 || 5 > 2)
console.log(9 > 10 || 15 > 20 || 5 > 2)

//not (não (inverte o valor lógico)) !
console.log(!(10 > 5))
console.log(!(10 < 5))
console.log(!(10 > 5 && 15 > 7))

//operadores ternarios (? (quando ocoorer algo) : (quando não ocorrer algo))
d = 15
d >= 18 ? console.log("maior de idade") : console.log("menor de idade")