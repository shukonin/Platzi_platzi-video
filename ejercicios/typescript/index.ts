// console.log("Hello, Typescript")

// function add(a: number, b: number) {
//     return a + b
// }

// const sum = add(2, 3)
// console.log(sum)

//boolean
let muted: boolean = true
muted = false

//numeros
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

//string
let nombre: string = 'Richard'
let saludo = `Me llamo ${nombre}`

//arreglos
let people: string[] = []
people = ['Isabel', 'Nicolle', 'Raul']
//people.push('9000')
let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Ricardo')
peopleAndNumbers.push(9001)

//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)

//any
let comodin: any = 'joker'
comodin = {type: 'wildcard'}

//Object
let someObject: object = {type: 'wildcard'}
