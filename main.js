typeof "hello" // 'string'
typeof 42 // 'number'
typeof {} // 'object'
typeof [] // 'object'
typeof function () { } // 'function' (хотя функция тоже объект)

let a
console.log(a) // undefined

let obj = {}
console.log(obj.property) // undefined

function test() { }
const result = test()
console.log(result) // undefined

let x

if (x === undefined) {
  console.log('x is undefined')
} else {
  console.log('x has a value')
}


let user = null

// Позже в коде
user = { name: 'Alice', age: 25 }

let data = { key: 'value' }

// Позже в коде
data.key = null

console.log(typeof null) // 'object'


// Операции, которые не имеют в математика однозначного результата
console.log(0 / 0)

// Операции с undefined
console.log(undefined + 2)

// Операции с несоответствующими типами
console.log('hello' - 5)


console.log(NaN == NaN) // false
console.log(NaN === NaN) // false

console.log(typeof NaN) // 'number'


console.log(isNaN(NaN)) // true
console.log(isNaN('hello')) // true, потому что 'hello' преобразуется в NaN
console.log(isNaN(123)) // false

console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN('hello')) // false, потому что 'hello' не NaN
console.log(Number.isNaN(123)) // false

console.log(5 == '5') // true
console.log(10 == "JavaScript") // false, данная строка преобразуется в NaN

console.log(true == 1) // true
console.log(false == 0) // true
console.log('1' == true) // true <= true приводится к числу 1; затем строка приводится к числу (1)

console.log(null == undefined) // true
console.log(null == 0) // false

console.log(5 == '5') // true
console.log(5 === '5') // false

console.log(5 != '5') // false, потому что '5' приводится к 5
console.log(5 !== '5') // true

let obj1 = { name: 'Alice' }
let obj2 = { name: 'Alice' }

console.log(obj1 == obj2) // false
console.log(obj1 === obj2) // false

obj2 = obj1
console.log(obj1 === obj2) // true

console.log('5' > 3) // true, потому что '5' приводится к 5
console.log(true >= 1) // true, потому что true приводится к 1

const sum = 2 + "2" // Результатом будет строка "22"

const multiply = 3 * "4" // Строка "4" преобразуется в число 4, результат будет 12
const subtract = "10" - 5 // Строка "10" преобразуется в число 10, результат будет 5

// Используя функцию String()
String(123) // '123'

// Методом .toString()
const num = 123
num.toString() // '123'

// Используя функцию Number()
Number('123') // 123

// Унарный плюс (+) перед строкой или другим значением преобразует его в число
const num2 = '11'
  + num2 // 11

// Используя функцию Boolean
Boolean(0) // false, 0 - это псевдоложь

// Двойное отрицание (!!) преобразует значение в булево.
// Первый ! преобразует значение в его логическое противоположное, второй ! снова меняет его на противоположное.
!!0 // false

if (null) {
  console.log('✖ Этот код не будет выполнен')
} else if (NaN) {
  console.log('✖ И этот тоже')
} else if (' ') {
  console.log('✔ А сюда мы попадаем! Строка содержащая символ пробела приводится к true')
}

let str = "hello"

// JavaScript автоматически оборачивает строку во временный объект
console.log(str2.toUpperCase()) // "HELLO"

let str1 = 'Типы данных'
console.log(str1.length) // 11

let str2 = 'Типы данных'
console.log(str2.indexOf('данных')) // 5
console.log(str2.indexOf('строка')) // -1

let str3 = 'Типы данных'
console.log(str3.slice(0, 4)) // 'Типы'
console.log(str3.slice(5)) // 'данных'

let str4 = 'Типы данных'
console.log(str4.toUpperCase()) // 'ТИПЫ ДАННЫХ'
console.log(str4.toLowerCase()) // 'типы данных'


