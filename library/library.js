let books = [
  {
    id: "1",
    title: `Apple. Computer evolution`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Richly illustrated chronological guide to the history of computers in which
       and structured information about the creation and development of Apple technology against the backdrop of history
       personal computers in general.
       The book contains descriptions of dozens of the most significant models of devices from both Apple and other manufacturers,
       accompanied by a large number of original studio photographs.
       The book is intended for a wide range of readers interested in the history of electronics.
       It can also serve as a source of inspiration for designers, marketers and entrepreneurs.`,
  },
  {
    id: "2",
    title: `How to explain computer science to a child`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Illustrated encyclopedia in infographic format on technical, social and cultural aspects
       in informatics. Explains step by step how children can get the most out of computers and internet services,
       staying safe.
       The book covers everything from data storage to life on the Internet,
       from programming to computer attacks. About how computers function, about modern software
       software, the device of the Internet and digital etiquette. All concepts - from hacker to bitcoin -
       explained clearly with illustrations and diagrams.`,
  },
  {
    id: "3",
    title: `The path of the Scrum Master. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `This book will help you become an outstanding Scrum Master and achieve great results with your team.
       It is illustrated and easy to understand - you can read it in a weekend, and use the resulting
       knowledge throughout your career.
       Based on 15 years of experience, Zuzana Shokhova explains the roles and responsibilities of a Scrum Master,
       how to solve everyday tasks, what competencies are needed to become an outstanding scrum master,
       What tools does he need to use?`,
  },
];

const root = document.getElementById("root");
// const root = document.querySelector('#root')
// console.log(root)

const div1 = document.createElement("div");
const div2 = document.createElement("div");

div1.classList.add("left");
div2.classList.add("right");

root.append(div1, div2);

const title = document.createElement("h1");
title.textContent = "Library";

const list = document.createElement("ul");
list.classList.add('list')

const addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.classList.add('add')

div1.append(title, list, addBtn);

function renderList() {
  const markup = books.map(
    ({ id, title }) =>
      `<li id='${id}' class='item'><p class='item-title'>${title}</p><button class='delete'>Delete</button><button class='edit'>Edit</button></button></li>`
  ).join('')
  list.insertAdjacentHTML('beforeend', markup)
}

renderList()