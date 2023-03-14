
// // Оголошення змінних

// const a = "variable"; // ініціалізуємо завжди зі значенням
// a = "new variable"; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним, оголошеним через const, не можна. Важливо: якщо цей рядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
// let b; // можемо ініціалізувати без присвоєння значення;

// b = "one more variable"; // значення може бути присвоєно пізніше, після ініціалізації;

// // Взаємодія з користувачем

// // - виведення даних:

// console.log("Hello!");
// alert("Hello!");

// // - отримання даних:

// const answer = confirm("Is your name Ivan?"); // користувач може відповісти так або відхилити питання
// console.log(answer)
// prompt("What is your name?"); // користувач  може ввести якісь дані або відхилити питання
// const userName = prompt("What is your name?");
// // console.log(userName)
// console.log(typeof userName)
// userName = prompt("What is your name?");
// console.log(userName)



// Додавання із заміною (також є для всіх інших операторів)
// let value = 5;
// value = value + 10;
// console.log(value) // 15
// value = value + 10;
// console.log(value) // 25

// value += 10;
// console.log(value); // 15
// value += 10;
// console.log(value); // 25

// let value1 = 10;
// // value1 = value1 - 2;
// // console.log(value1) // 8
// // value1 = value1 -2 ;
// // console.log(value1) // 6

// value1 -= 2;
// console.log(value1); // 8
// value1 -= 2;
// console.log(value1); // 6

// // Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)

// // Загальні правила порівняння
// // Результатом порівняння буде бульове значення.
// // При порівнянні різних типів за допомогою операторів == та =! операнди приводяться до числа
// // null не дорівнює нічому крім себе та undefined.
// // undefined не дорівнює нічому крім себе та null.
// // NaN не дорівнює нічому, навіть самому собі
// // Рядки між собою порівнюються за unicode (посимвольно).

// // Правила приведення різних типів до числа:
// // true --> 1
// // false --> 0
// // '', а також рядок з пробілами --> 0
// // null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// Оператор ==
// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log("123" == 123); // true
// console.log(true == "1"); // true
// console.log(4 == 5); // false

// // Оператор ===
// console.log("123" === 123); // false
// console.log(null === null); // true
// console.log(2 + 2 === 4); // true
// console.log(NaN === NaN); // false
// console.log(undefined === null); // false

// // // Оператор !=
// console.log("4" != 4); // false

// // Оператор !==
// console.log("4" !== 4); // true

// console.log(null > 0) // false
// console.log(null >= 0) // true


// // Number.isNaN

// const a = 123;
// const b = "qwerty";

// console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); //false

// const toNumber = Number(b);
// console.log(toNumber); // NaN
// console.log(Number.isNaN(toNumber)); // true
// console.log(toNumber == NaN) // false


// const data = prompt("Enter a number, please");
// console.log(data);

// const dataToNumber = Number.parseInt(data);
// console.log(dataToNumber);

// const isNaN = Number.isNaN(dataToNumber);
// console.log(isNaN);

// const num1 = 0.3;
// const num2 = 0.6;
// const sum1 = num1 + num2;
// console.log(sum1)
// // console.log((num1*100 + num2*100) / 100 )
// console.log(sum1.toFixed(3));
// const fixedSum1 = Number(sum1.toFixed(3));
// console.log(fixedSum1);


// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random() * (max - min) + min); // псевдовипадкове число від min до max


// Приведення до рядка
// const num = 123;
// console.log(num)
// const str1 = String(num)
// console.log(str1)
// const str2 = num + ''
// console.log(str2)
// const str3 = num.toString()
// console.log(str3)


// const userName = prompt('What is your name');
// const age = prompt('How old are your');

// const message = `My name is ${userName}. I am ${age} years old.`
// alert(message)

// const word1 = "     ";
// console.log(word1.length);

// const word2 = "hTMl";
// console.log(word2.toLowerCase()) // html
// console.log(word2.toUpperCase()) // HTML

// const word3 = "superjavascript";
// const substring1 = "java";
// const substring2 = "css";

// console.log(word3.indexOf(substring1)); // 5
// console.log(word3.indexOf(substring2)); // -1

// const word4 = "banana";
// // console.log(word4.indexOf("a")); // 1
// // console.log(word4.lastIndexOf("a")); // 5
// // console.log(word4.indexOf("n")); // 2
// console.log(word4.lastIndexOf("n")); // 4

// const sentense = "two tasty bananas";
// console.log(sentense.indexOf(" ")); // 3
// console.log(sentense.indexOf("tasty bananas")); // 4

// console.log(word3.includes(substring1)); // true
// console.log(word3.includes("Java")); // false
// console.log(word3.includes(substring2)); // false

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(jsFileName) // "script.js"
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// // const minifiedCssFileNames1 = cssFileNames.replace(".css", ".min.css");
// // console.log(minifiedCssFileNames1); // "styles.min.css, about.css, portfolio.css"
// const minifiedCssFileNames2 = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames2); // "styles.min.css, about.min.css, portfolio.min.css"


