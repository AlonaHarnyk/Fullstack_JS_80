const list = document.querySelector(".list");
const form = document.querySelector("form");
const button = document.querySelector(".more");
const loader = document.querySelector(".loader");

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

let pageToFetch = 0;
let queryToFetch = "";

function fetchEvents(keyword, page) {
  const params = new URLSearchParams({
    apikey: API,
    keyword,
    page,
    size: 200,
  });
  return fetch(`${BASE_URL}?${params}`)
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}

function getEvents(query, page) {
  loader.classList.remove('unvisible')
  fetchEvents(query, page).then((data) => {
    console.log(data);
    if (!data.page.totalElements) {
      alert(`There are no events by keyword ${query}`);
      return;
    }
    const events = data._embedded.events;
    console.log(events);
    renderEvents(events);
    if (data.page.totalPages > 1 && pageToFetch + 1 !== data.page.totalPages) {
      button.classList.remove("unvisible");
    }
  }).finally(() => {
    loader.classList.add('unvisible')
  });
}

function renderEvents(events) {
  const markup = events
    .map(({ name, images }) => {
      return `<li><h2>${name}</h2><img src='${images[0].url}' alt='${name}' width='200'></li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements.query.value;
  if (!inputValue.trim() || inputValue === queryToFetch) {
    return;
  }
  queryToFetch = inputValue;
  pageToFetch = 0;
  list.innerHTML = "";
  button.classList.add("unvisible");
  getEvents(queryToFetch, pageToFetch);
}

button.addEventListener("click", handleLoadMore);

function handleLoadMore() {
  button.classList.add("unvisible");
  pageToFetch += 1;
  getEvents(queryToFetch, pageToFetch);
}
