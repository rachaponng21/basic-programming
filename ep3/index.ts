function helloWorld() {
    console.log("สวัสดี")
}

helloWorld() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
}

helloName('Ruj') // input ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi()) // ไม่มี input แต่มี output

function st(fname: string, sname: string) {

    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน') 
    } else {
        console.log('ไม่สอน')
    }
}

st('mix','zane')

function sf(mname: string, zname: string, fname:string) {

    if (mname === 'mix' && zname === 'zane' || fname === 'forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อมเรียน')
    }
}

sf('mix','zane','forth')

function sr(m: string, z: string, f:string) {

    if (!(m === 'mix' || z === 'zane') && f === 'forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อมเรียน')
    }
}

sr('mix','zane','forth')

function ep(s: string, t: number, w: number) {
    
    if (s === 'เพศชาย' && t > 170 || (w > 50 && w <= 110)) {
        console.log("จับใบดำใบแดง")
    } else {
        console.log("ไม่เข้าเกณฑ์")
    }
}
        
ep('เพศชาย',167,48)

function dw(a: number, p: number, d: number) {
    if (a > 16 && p < 70000 && d < 50000) {
        console.log("รับ 10000 บาท")
    } else {
        console.log("อด.....")
    }
}

dw(19, 15000, 45000)