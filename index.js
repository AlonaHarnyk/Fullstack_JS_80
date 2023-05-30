const fetchBtn = document.querySelector(".fetch");
const list = document.querySelector(".list");
const addBtn = document.querySelector(".add");
const formWrapper = document.querySelector(".form-wrapper");
const loader = document.querySelector(".loader");

addBtn.style.display = "none";
loader.style.display = "none";

const BASE_URL = "http://localhost:8080";

fetchBtn.addEventListener("click", getUsers);

function getUsers() {
  loader.style.display = "block";
  fetch(`${BASE_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
      const markup = users
        .map(
          ({ name, email, id }) => `
            <li id=${id}>
            <p>Name: <span class='name'>${name}</span></p>
            <p>Email: <span class='email'>${email}</span></p>
            <button class='delete' type='button'>Delete</button>
            <button class='edit' type='button'>Edit</button>
            </li>
            `
        )
        .join("");
      list.innerHTML = "";
      list.insertAdjacentHTML("afterbegin", markup);
      fetchBtn.style.display = "none";
      addBtn.style.display = "inline";
      const delBtns = document.querySelectorAll(".delete");
      delBtns.forEach((btn) => btn.addEventListener("click", deleteUser));
      const editBtns = document.querySelectorAll(".edit");
      editBtns.forEach((btn) => btn.addEventListener("click", editUser));
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loader.style.display = "none";
    });
}

function deleteUser(event) {
  const id = event.target.parentNode.id;
  const options = {
    method: "DELETE",
    headers: {
      authorization: "admin",
    },
  };
  event.target.textContent = "Deleting";
  fetch(`${BASE_URL}/users/${id}`, options)
    .then(() => getUsers())
    .catch((error) => console.log(error));
}

addBtn.addEventListener("click", addUser);

function createFormMarkup(name = "", email = "") {
  return `<form>
    <label>
    Name:
    <input type='text' name='name' value='${name}'>
    </label>
    <label>
    Email:
    <input type='email' name='email' value='${email}'>
    </label>
    <button class='save'>Save</button>
    </form>`;
}

function addUser() {
  formWrapper.innerHTML = createFormMarkup();
  const form = document.querySelector("form");
  const saveBtn = document.querySelector(".save");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    saveBtn.textContent = "Saving..";
    fetch(`${BASE_URL}/users`, options)
      .then(() => {
        getUsers();
        formWrapper.innerHTML = "";
      })
      .catch((error) => console.log(error));
  });
}

function editUser(event) {
  const id = event.target.parentNode.id;
  const editBtn = event.target;
  const name = event.target.parentNode.querySelector(".name").textContent;
  const email = event.target.parentNode.querySelector(".email").textContent;
  formWrapper.innerHTML = createFormMarkup(name, email);
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
    };
    const options = {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    editBtn.textContent = "Editing";
    fetch(`${BASE_URL}/users/${id}`, options)
      .then(() => {
        getUsers();
        formWrapper.innerHTML = "";
      })
      .catch((error) => console.log(error))
      .finally(() => (event.target.textContent = "Edit"));
  });
}
