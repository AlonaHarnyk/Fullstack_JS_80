// const body1 = document.querySelector('body')
// const body2 = document.body
// console.log(body2)

// const elem1 = document.querySelector('#text')
// console.log(elem1)

// const elem1 = document.querySelector('li')
// console.log(elem1)

// const elem2 = document.querySelectorAll('li')
// console.log(elem2)

// const elem3 = document.querySelector('li')
// // // console.log(elem3)

// const elem4 = elem3.querySelector('p')
// console.log(elem4)

// console.log(elem4.textContent)

// elem4.textContent = 'Super text'

// console.log(elem4.textContent)

// console.log(elem3.classList.contains('item1'))
// console.log(elem3.classList.contains('superitem'))

// // elem3.classList.add('superitem')
// console.log(elem3.classList.contains('superitem'))
// elem3.classList.remove('item1')
// elem3.classList.toggle('superitem')

// elem2.forEach(elem => elem.classList.add('item'))
// elem2.forEach((elem) => elem.style.color = 'green');
// elem4.style.color = 'red'

// const img = document.querySelector('img')
// img.setAttribute('alt', 'image')
// img.alt = 'image'
// console.log(img.getAttribute('src'))
// console.log(img.attributes)
// img.removeAttribute('src')

// const btn = document.querySelector('[data-action="save"]')
// // console.log(btn.dataset.action)

// const title = document.createElement('h1');
// const text = document.createElement('p');

// console.log(title)
// title.textContent = 'Hello'
// title.style.backgroundColor = 'yellow'

// text.textContent = 'Test'

// // const list = document.querySelector('ul')

// // list.after(title, text)

// text.remove()

// const span = document.createElement('span')
// span.textContent = '!!!'
// title.append(span)

// // console.log(title.innerHTML)

// title.innerHTML = 'Hello!!!'

// const div = document.querySelector('.div')
// console.log(div)

// // div.innerHTML = '<p>1</p><p>2</p>'
// div.innerHTML = ''
// // div.innerHTML = "<p>1</p><p>2</p><p>3</p>";

// div.insertAdjacentHTML("afterbegin", "<p>1</p><p>2</p>");
// div.insertAdjacentHTML('beforeend', '<p>3</p>')

// const array = [{a: 1}, {a: 2}, {a: 3}]

// const markup = array.map(({a}) => `<li>${a}</li>`).join('')

// console.log(markup)

// const list = document.querySelector('.list')

// list.insertAdjacentHTML('afterbegin', markup)

// FORBIDDEN !!!!!

// const list = document.querySelector('.list')

// array.forEach(({a}) => list.insertAdjacentHTML('beforeend', `<li>${a}</li>`))

// const elements = array.map(({a}) => {
//     const li = document.createElement('li')
//     li.textContent = a
//     return li
// })

// console.log(elements)

// list.append(...elements)

// FORBIDDEN !!!!!

// const elements = array.forEach(({a}) => {
//     const li = document.createElement('li')
//     li.textContent = a
//     // list.appendChild(li)
//     list.append(li)
// })
