const input = document.querySelector(".lodash");

// input.addEventListener("input", _.throttle(inputHandler, 500));
input.addEventListener(
  "input",
  _.debounce(inputHandler, 500, {
    leading: true,
    trailing: true,
  })
);

function inputHandler({ target: { value } }) {
  console.log("here");
  console.log("value", value);
}
