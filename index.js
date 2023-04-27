// const div = document.querySelector("div");
// div.addEventListener("click", (e) => {
//   console.log(e);
// });

// const link = document.querySelector("a");
// link.addEventListener("click", (e) => {
//   e.preventDefault();
// });

// link.addEventListener("click", clickHandler);
// function clickHandler(e) {
//   e.preventDefault();
// }

// document.addEventListener("keydown", (event) => {
//   if (event.code === "Escape") {
//     console.log("here");
//   }
// });

// const input = document.querySelector('input')
// input.addEventListener('focus', (e) => {
//     console.log(e.target.value)
// })

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    login: e.target.elements.login.value,
    password: e.target.elements.password.value,
  };
    console.log(data)
});
