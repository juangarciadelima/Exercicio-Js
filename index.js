//Movimento retilinio uniforme//
const tempinho = 4

const velocidadezinha = 7

const velof = 3

const veloi = 5

function muvr() { return veloi + tempinho * velocidadezinha - velof }
console.log('resultado', muvr())

//Movimento retilinio uniformememente variado//
const tempinho = 4

const velof = 3

const veloi = 5

const aceleracao = 7


function muvv() { return veloi + tempo * aceleracao - velof }
console.log('resultado', muvv())

//Media aritmética//
const num1 = 3

const num2 = 4

const num3 = 5

const num4 = 6

const num5 = 7

function media() { return (num1 + num2 + num3 + num4 + num5) / 5 }
console.log('resultado', media())

//objeto(ainda vai ser feito)//
let idade = 15
let name = 'Juan'
let sobrenome = 'Garcia'
let personinha = {
    name: 'Juan', idade: '15', sobrenome: 'Garcia', falar: function () {
        alert('Ele acha que sabe falar bonito')
        console.log(personinha['name'])
    }
}

console.log (personinha.falar)



//Areá de circulo//
const pi = 3.14

const raio = 2
function areacirculo() { return pi * raio ** 2 }
console.log('resultado', areacirculo())


//Areá de triangulo//
const base = 3

const altura = 4

function areat() { return (base * altura) / 2 } areat()
console.log('resultado', areat())