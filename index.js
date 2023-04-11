//Transformar um número quebrado com casas decímais e trocar ponto por virgula.


let number = 154.445645132498

console.log(number.toFixed(2)) // 154.45

console.log(typeof (number.toFixed(2))) // string

console.log(typeof Number(number.toFixed(2))) // number

console.log((number.toFixed(2).replace('.',','))) //154,45 (alterei o '.' por ',')

console.log(Number(number.toFixed(2).replace('.',','))) // NaN (por causa da vírgula que é uma string)