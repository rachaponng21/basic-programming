for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let sum: number = 0

for (let i = 1; i <= 60; i++) {
    sum=sum + i
}

console.log('Total: ', sum)

let sum: number = 0
let i: number = 1
 
while (i <= 31) {
    sum = sum + i
    i++
}

console.log('Total:', sum)

let sum: number = 0
let i: number = 1

do {
   sum =sum + i
   i++
}while (i <= 31)

console.log('Total:', sum)

let count: number = 0

while (true) {
    console.log("โสดโว้ย")
    count++
    if (count === 10) {
        break
    }
}

let count: number = 0
let age: number = 1

while (true) {
    console.log("ฉันอายุ", age, "ปี")
    age++
    count++
    if (count === 19) {
        break
    }
}

for (let i = 1; i <= 19; i++) {
    console.log('ฉันอายุ' + i + 'ปี')
}

let i: number = 1
while (i <= 19) {
    console.log('ฉันอายุ' + i + 'ปี')
    i++
}

const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

for (let i =0; i < cars.length; i++) {
    console.log(cars[i])
}

const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ไง')
    }
}

const friend: string[] = ['คิว', 'โอม', 'พีท', 'ศร', 'ป้อง']

for (let i = 0; i < friend.length; i++) {
    if (friend[i] === 'โอม') {
        console.log('ไปกินหมูกระทะกัน')
    }
}

const num: number[] =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < num.length; i++) {
    if (num[i] === 3 || num[i] === 5 || num[i] === 7) {
        num[i] = 0
    }
}

console.log(num)