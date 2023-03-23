// function isIncluded(array, number) {
//     const result = array.includes(number)
//     console.log(result)
// }

// isIncluded([1, 2, 5, 8, 3], 4) // false
// isIncluded([1, 2, 5, 8, 3], 5) // true
// isIncluded(5, [1, 3, 5]) // error

// function isIncluded(array, number) {
//     const result = array.includes(number)
//     // console.log(result)
//     return result
//     // console.log(result)
// }

// isIncluded([1, 2, 5, 8, 3], 4) // false

// const a = isIncluded([1, 2, 5, 8, 3], 4)
// console.log(a)

// console.log(isIncluded([1, 2, 5, 8, 3], 4)) // false
// console.log(isIncluded([1, 2, 5, 8, 3], 5)) // true

// const a = isIncluded([1, 2, 5, 8, 3], 4)
// console.log(a) // false
// const b = isIncluded([1, 2, 5, 8, 3], 5)
// console.log(b) // true

// function add(a, b) {
// //   const sum = a + b
// //   return sum
//   return a + b;
// }

// const number1 = add(1, 3); // 4
// console.log(number1)
// const number2 = add(5, 7); // 12
// console.log(number2)

// const sum = number1 + number2 // 16
// console.log(sum)

// const sum = add(1, 3) + add(5, 7)
// console.log(sum) // 16

// function add(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         // // console.log('One of operands is not a number')
//         // return
//         return 'One of operands is not a number'
//     }
//     return a + b
// }

// console.log(add(3, 7)) // 10
// console.log(add( 5, '10')) // 'One of operands is not a number'
// console.log(add(3, '7'))


// ❗️❗️❗️ Значення параметрів за замовчуванням

// function add(a = 0, b = 0) {
//   // const sum = a + b
//   // return sum
//  console.log(a)
//  console.log(b)
//  return a + b;
// }

// console.log(add(1))

// function add(a , b , c ) {
//     console.log(a + b + c)
// }

// const num1 = 3;
// const num2 = 4

// add(num1, num2)
// add(3)
// add()

// ❗️❗️❗️ Arguments

// function add() {
//     // console.log(arguments)
//     // console.log(arguments[0])
//     // console.log(arguments.length)
//     // let sum = 0;
//     // for(const arg of arguments) {
//     //     // console.log(arg)
//     //     sum +=arg
//     // }
//     // console.log(sum)
//     // return sum
// }

// add(5, 7, 4, 9, 10)
// add(5, 7, 4, 9, 10, 100, 45, 36)

// function isIncluded() {
//     console.log(arguments)
//     const array = Array.from(arguments);
//     console.log(array)
//     const number = arguments[arguments.length - 1]
//     console.log(number)
//     const array2 = array.slice(0, -1)
//     console.log(array2)
//     console.log(array2.includes(number))
//     return array2.includes(number)
// }

// function isIncluded(...array) {
//     console.log(array)
//     const number = array[array.length - 1]
//     console.log(number)
//     const array2 = array.slice(0, -1)
//     console.log(array2)
//     console.log(array2.includes(number))
//     return array2.includes(number)
// }

// isIncluded(2, 5, 6, 8, 4, 9, 3, 7)

// console.log(add(3, 7))
// console.log(add( 5, '10'))

// const add = function(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of operands is not a number'
//         // return
//     }
//     return a + b
// }

// console.log(add(3, 7))
// console.log(add( 5, '10'))

// ❗️❗️❗️ stack

// function x(a, b) {
//     if (a > b) {
//         return a - b
//     }
//     return a + b
// }
// console.log(x(10, 20))
// console.log(x(20, 10))

// function bar() {
//   console.log("bar");
//   console.log(222);
// }

// function baz() {
//   console.log("baz");
//   console.log(444);
// }

// function foo() {
//   console.log("foo");
//   console.log(111)
//   bar();
//   console.log(333);
//   baz();
//   console.log(555);
//     // foo()
// }

// foo();

//   console.log('!!!')

// ❗️❗️❗️ Задачі

// function transform(...args) {
// //   console.log(args);
//   const array = [];
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       array.push(String(arg));
//     } else {
//       array.push(Number(arg));
//     }
//   }
//   return array;
// }

// function transform(...args) {
//   const array = [];
//   for (const arg of args) {
//     typeof arg === "number" ? array.push(String(arg)) : array.push(Number(arg));
//   }
//   return array;
// }

// console.log(transform(4, "5", 3, "9", 7)); // ['4', 5, '3', 9, '7']

// function flatArray(array) {
//     const newArray = [];
//     for (const elem of array) {
//       if (Array.isArray(elem)) {
//         for (const item of elem) {
//           newArray.push(item);
//         }
//       } else {
//         newArray.push(elem);
//       }
//     }
//     return newArray;
//   }

//   console.log(flatArray(["a", 5, ["3", 7, 8], "45", [1, 3, 7, 8]]));
