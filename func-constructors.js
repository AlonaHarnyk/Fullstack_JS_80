
 // // // Конструктор це звичайна функція, до якої застосували оператор new. Це призводить до створення нового об'єкта та виклику функції у контексті цього об'єкта.

// // // Будь-яка функція, крім стрілочної, може бути використана як конструктор, тобто викликана оператором new. При виклику стрілки через New буде помилка.

// // // Процес створення об'єкта через конструктор відбувається так:

// // // Створюється новий пустий об'єкт.
// // // Функція-конструктор викликається в контексті цього об'єкта.
// // // Ключове слово this всередині конструктора отримує посилання на цей об'єкт.
// // // Конструктор виконується і, як правило, модифікує this (створений об'єкт), додаючи властивості та методи.
// // // Повертається this.

// // const Hotel1 = function (name, stars, capacity) {
// //   this.name = name;
// //   this.stars = stars;
// //   this.capacity = capacity;
// // };

// // const hotel1 = new Hotel1('Resort Hotel', 5, 100);
// // console.log(hotel1) // {name: "Resort Hotel", stars: 5, capacity: 100}

// // // const Hotel = function (name, stars, capacity) {
// // //   // this = {};

// // //   // в this пишемо властивості і методи
// // //   this.name = name;
// // //   this.stars = stars;
// // //   this.capacity = capacity;

// // //   // return this;
// // // };

// // const Hotel2 = function (name, stars, capacity) {
// //   this.name = name;
// //   this.stars = stars;
// //   this.capacity = capacity;
// //   this.guestCount = 0;

// //   this.greet = function (guestName) {
// //     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
// //   };

// //   this.addGuests = function (amount) {
// //     this.guestCount += amount;
// //   };

// //   this.removeGuests = function (amount) {
// //     this.guestCount -= amount;
// //   };
// // };

// // const hotel2 = new Hotel2('Sunrise Hotel', 5, 100);

// // console.log(hotel2);
// // // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// // hotel2.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// // hotel2.addGuests(50);
// // hotel2.removeGuests(50);


// // Function.prototype

// // Створимо функцію-конструктор Guest, яка створюватиме нам екземпляри об'єктів гостя готелю.

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// // Так як функція - це теж об'єкт, у кожної функції, крім стрілочних, є властивість prototype у якому початково зберігається об'єкт з єдиним полем конструктора, що вказує на саму функцію-конструктор.

// Guest.prototype = {
//   constructor: Guest,
// };

// // У стрілочних функцій немає властивості prototype, тому що їх не можна викликати через new, і, відповідно, у ньому немає потреби.

// // Властивість Function.prototype:
// // Є об'єктом
// // У нього можна записувати властивості та методи
// // Властивості та методи prototype будуть доступні за посиланням __proto__ об'єкту
// // В якості prototype початково є метод constructor 

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// console.log(Guest.prototype); // {constructor: ƒ}


// // При створенні об'єкта через new у його полі __proto__ записується посилання на об'єкт, що зберігається як prototype функции - конструктора.

// const x = new Guest('a', 5)

// console.log(x)

// // Цю особливість ми можемо використовувати для того, щоб додавати до об'єкту prototype методи, які будуть доступні за посиланням абсолютно всім об'єктам, створеним через new Guest(...).

// // Причому якщо ми створимо мільйон екземплярів гостя, набір методів буде не у кожного свій, а лише один, загальний, що зберігається у властивості Guest.prototype і доступний усім нащадкам за посиланням, яке записується в полі __proto__ об'єкта при створенні через прототипне успадкування та ланцюжок прототипів.

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
  
// };

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// console.log(Guest.prototype); 

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

// // Так як у властивості prototype лежить об'єкт, то при прототипному наслідуванні відбувається присвоєння за посиланням, тому якщо ми змінимо значення властивості prototype, то це нове значення отримають і всі властивості, що мають посилання на об'єкт prototype

// // Іноді трапляються завдання, коли об'єкти, створені функцією-конструктором, повинні мати доступ до полів і методів прототипу, оголошеним в іншій функції-конструкторі.

// // Наприклад ми пишемо гру і нам необхідно підготувати логіку для системи персонажів, де є спільний конструктор Hero з дефолтними полям?и спільними для всіх класів, на кшталт імені, здоров'я, кількості досвіду тощо. Після чого нам необхідно зробити конструктори для Warrior та Wizard, екземпляри яких також повинні мати доступ до полів Hero, але водночас мати свої власні.

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }

// // // // Далі необхідно створити Warrior, тому що немає сенсу додавати до Hero абсолютно всі поля всіх класів. Тому нам необхідно створити ще функцію-конструктор, але при цьому вона повинна бути пов'язана з Hero.

// // // // Для вирішення цього завдання ми можемо використовувати метод call(), викликавши функцію-конструктор Hero і передавши їй об'єкт, що створюється Warrior як контекст.

// const Warrior = function (name, xp, weapon) {
// /*
//     * Під час виконання функції Warrior викликаємо функцію Hero
//     * в контексті об'єкта, що створюється в Warrior, а також передаємо
//     * аргументи для ініціалізації полів this.name та this.xp
//     *
//     * this це майбутній екземпляр Warrior
//     */
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// // Warrior.prototype.attack = function () {
// //   console.log(`${this.name} attacks with ${this.weapon}`);
// // };

// const poly = new Warrior('Poly', 200, 'sword');

// // // console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
// // // poly.attack(); // Poly attacks with sword

// // poly.gainXp(); // Uncaught TypeError: poly.gainXp is not a function

// // // // // Поля з Hero.prototype не додаються в ланцюжок прототипів за замовчуванням. Необхідно явно вказати зв'язок поля Warrior.prototype та Hero.prototype. 

// // // // /*
// // // //   * Використовуємо Object.create() для того, щоб спочатку записати
// // // //   * у Warrior.prototype порожній об'єкт, у __proto__ якого буде
// // // //   * Посилання на Hero.prototype. Це необхідно зробити до того
// // // //   * як додавати методи
// // // //   */
// Warrior.prototype = Object.create(Hero.prototype);

// // Warrior.prototype.attack = function () {
// //   console.log(`${this.name} attacks with ${this.weapon}`);
// // };
// poly.gainXp(300); // Poly gained 300 experience points

// // Повний приклад коду

// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
//   };
  
//   Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
//   };
  
//   const Warrior = function (name, xp, weapon) {
//     Hero.call(this, name, xp);
  
//     this.weapon = weapon;
//   };
  
//   console.log(Warrior.prototype)
  
//   Warrior.prototype = Object.create(Hero.prototype);
  
//   console.log(Warrior.prototype)
//   Warrior.prototype.constructor = Warrior;
  
//   console.log(Warrior.prototype)
  
//   Warrior.prototype.attack = function () {
//     console.log(`${this.name} attacks with ${this.weapon}`);
//   };
  
//   const poly = new Warrior('Poly', 200, 'sword');
  
//   console.log(poly)
  
//   poly.gainXp(300); // Poly gained 300 experience points

