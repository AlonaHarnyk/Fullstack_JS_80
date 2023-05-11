// try {
//   console.log(b)
// } catch (error) {
//   console.log(error.message)
// }

// const b = 10

// console.log(11111)

// localStorage.setItem('theme', {a:1, b:2})
// const res = localStorage.getItem('theme')
// console.log(res)
const data = JSON.stringify({a:1, b:2})
localStorage.setItem('theme',data )
const res = JSON.parse(localStorage.getItem('theme'))
// console.log(res)
// console.log()

localStorage.setItem('token', 'qnergohwir894785tgoilkadjsiDHAsxbfdnglkr' )

// localStorage.removeItem('token')

// localStorage.clear()