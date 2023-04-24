//   const getSums = (array) => array.reduce((acc, num, idx) => idx === 0 ? [num] : [...acc, num + acc[idx-1]], [])

// //   const getSums = (array) => array.reduce((acc, num, idx) => {
// //     console.log('Iteration', idx+1)
// //     console.log('acc', acc)
// //     if (idx === 0) {
// //       return [num]
// //     } else {
// //       console.log('last elem', acc[acc.length - 1])
// //       return [...acc, num + acc[idx - 1]]
// //     }

// //   }, [])

//   console.log(getSums([1, 2, 3, 4, 5]))// [1, 3, 6, 10, 15]

// const array = [1, 2, 3, 4, 5]
// const objects = array.map((el, index) => ({el, index}))
// console.log(objects)
// objects.splice(1, 2)
// console.log(objects)
// const element = objects.find(({index}) => index === 4).el
// console.log(element)

// const foo = arr => {
//     const newArray = []
//     console.log(arr)
//     for(el of arr) {
//         console.log(el)
//         console.log(newArray)
//         newArray.push(el + 10)

//     }
//     return newArray
    
// }

// console.log(foo([1, 2, 3]))


// const getSortedFriends = (users) => {
//   let arr = [...users].flatMap((friend) => friend.friends);
//   arr = arr.filter((friend, index) => arr.indexOf(friend) === index);
//   arr = arr.sort((a, z) => a.localeCompare(z));
//   return arr;
// };

// const getSortedFriends = (users) =>
//   users
//     .flatMap(({ friends }) => friends)
//     .filter((item, index, array) => array.indexOf(item) === index)
//     .sort((a, b) => a.localeCompare(b));



//-------------1-----------------------------------
// order(pizzaName, onSuccess, onError) {
//   for (const pizza of this.pizzas) {
//     if (pizzaName === pizza) {
//       return onSuccess(pizzaName);
//     }
//   }
//   return onError(
//     `There is no pizza with a name ${pizzaName} in the assortment.`
//   );
// }

// -------------2----------------------
// order(pizzaName, onSuccess, onError) {
//   if (this.pizzas.includes(pizzaName)) {
//     return onSuccess(pizzaName);
//   }
//   return onError(
//     `There is no pizza with a name ${pizzaName} in the assortment.`
//   );
// }


// const foo1 = () => {
//     const a = 'js'

//     const foo2 = () => {
//         return a
//     }

//     return foo2
// }

// // console.log(foo1())

// const foo3 = foo1()
// // console.log(foo3)

// console.log(foo3())


// console.log({}._proto_)

// const x = [1, 2, 3].__proto__
// const y = x.__proto__
// console.log(y)
// console.log(y.__proto__)

// class A {
//     constructor(name) {
//         this.name = name
//     }
// }

// const b = new A
// console.log(b.__proto__)

// const a = (b , c) => b + c

// const a = new Function('b', 'c', 'return b + c')

// console.log(a(10, 30))
