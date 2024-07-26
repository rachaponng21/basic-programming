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