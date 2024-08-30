const score = [10, 23, 26, 30, 33]

let sum: number = 0

for (let i = 0;i<score.length; i++) {
    sum = sum + score[i]
}

let avg = sum / score.length

console.log("Total: ", sum)
console.log("Avg: ", avg)

const myStudents: string = "เชน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)

const fullName: string = 'สุดสวย สวยสุด'

console.log(fullName.split(' ')[1])

console.log(fullName.slice(0, fullName.indexOf(' ')))

const animalLike: string = "หมา*แมว*ช้าง*เสือ"

const animalLikeArray: string[] = animalLike.split(',')

console.log(animalLike)
console.log(animalLikeArray)

const animalLike: string = "หมา*แมว*ช้าง*เสือ"
const animalLikeArray: string[] = animalLike.split('*')

console.log("ตั้งต้น: ",animalLikeArray)

animalLikeArray.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ", animalLikeArray)

animalLikeArray.push('ยีราฟ') //ใส่ต่อท้าย

console.log("ใส่ต่อท้าย", animalLikeArray)

animalLikeArray.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก", animalLikeArray)

animalLikeArray.unshift('กาปิบาร่า') //ใส่ตัวหน้า

console.log("ใส่ตัวหน้า", animalLikeArray)

const fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.sort() //เรียง A - Z

console.log("เรียง A-Z: ", fruits)

fruits.reverse() //เรียง Z-A

console.log("เรียง Z-A:", fruits)

const fruitsSlice = fruits.slice(0, 2)

console.log("ตัด:", fruitsSlice)

const friendName: string = "โอม, คิว, สร, เฟิร์ส"
const friendNameArray: string[] = friendName.split(',')

friendNameArray.sort()

console.log("เรียง ก - ฮ ", friendNameArray)

friendNameArray.reverse()

console.log("เรียง ฮ - ก: ", friendNameArray)

const me = {
    fistName: 'Rachapong',
    lastName: 'Waengchaiyaphum',
    age: 19,
    birtday: 21/8/2548,
    telephone:909108424
}

// ประวัติส่วนตัว

// ชื่อ: Rachapong
// นามสกุล: Waengchaiyaphum
// อายุ: 19
// เกิดวันที่: 21/8/2548
// เบอร์โทร: 909108424