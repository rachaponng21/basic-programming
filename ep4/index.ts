function sayHi(day0fWeek: number) {
    if (day0fWeek === 1) {
        console.log('สวัสดีวันอาทิตย์') 
    }else if (day0fWeek === 2) {
        console.log('สวัสดีวันจันทร์')
    }else if (day0fWeek === 3) {
        console.log('สวัสดีวันอังคาร')   
    }else if (day0fWeek === 4) {
       console.log('สวัสดีวันพุธ') 
    }else if (day0fWeek === 5 ) {
        console.log('สวัสดีวันพฤหัสบดี')
    }else if (day0fWeek === 6 ) {
        console.log('สวัสดีวันศุกร์')
    }else if (day0fWeek === 7 ) {
        console.log('สวัสดีวันเสาร์')
    }
}

sayHi(6)

function sayHi(day0fWeek: number) {
    switch (day0fWeek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
            break
    }   
}

function size (shirt: string) {
    switch (shirt) {
        case 's':
            console.log('ผอม')
            break
        case 'm':
            console.log('ผอม')
            break
        case 'l':
            console.log('ท้วม')
            break
        case 'xl':
            console.log('ท้วม')
            break
        case '2xl':
            console.log('อ้วน')
            break 
    }
}

size ('l')

function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(40.67676, 15))

function de (p: number) {
    const r = p.toLocaleString()
    return r
}

console.log(de(1000))

const str: string = "RACHAPONG"

console.log(str.toLowerCase())

function checkStringLenght(s: string) {
    const x = s.length
    return x
}

console.log(checkStringLenght("Rachapongwaengchaiyaphum"))

function getCharByIndex(msg: string, index: number) {
    return msg.charAt(index)
}

console.log(getCharByIndex('อยากกลับบ้านน', 5))

const str: string = 'ฉันรักเธอ'

console.log(str.includes('เกลียด'))

function checkStrIndex(str: string, s: string) {
    if(str.includes(s)) {
        console.log(str.indexOf(s))
    } else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}

checkStrIndex('อยากกลับบ้าน Home', 'กลับบ')