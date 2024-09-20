// zane.com -> No
// tan@ -> No
// safe@utk.ac.th ->
// poppy@gmail.com -> Yes
const database = [
    {
        email: 'usergame@gmail.com',
        password : 'loveyouja5656'
    }
]

function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const user0bject = {
                email: email,
                password: password
            }
            database.push(user0bject)
            alert('สมัครสมาชิกแล้ว ยินดีต้อนรับ คุณ' + email)
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 ตัว และไม่เกิน 16')
        }
    } else {
        alert('email ไม่ถูกต้อง')
    }
}

register('max.com' , '1234')

