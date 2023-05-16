// Write a function which returns a day number that was some amount of days ago from the passed date.

// const getPastDay = (date, days) => {
//   const MS_PER_DAY = 1000 * 60 * 60 * 24;
//   const msPerDays = MS_PER_DAY * days;
//   const pastDate = date - msPerDays;
//   return new Date(pastDate).getDate()
// };

// const date = new Date(2022, 0, 2);
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2022)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2021)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2021)

// // Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

// const formatDate = (date) => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const days = String(date.getDate()).padStart(2, "0");
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   return `${year}/${month}/${days} ${hours}:${minutes}`;
// };

// console.log(formatDate(new Date("6/15/2019 09:15:00"))); // "2019/06/15 09:15"
// console.log(formatDate(new Date())); // gets current local time

// console.log(11111)

// const sum = (a, b) => {
//     console.log(a + b)
// }

// const timerId = setTimeout(sum, 0, 10, 100)

// console.log(22222)

// clearTimeout(timerId);

// const timerId = setInterval(sum, 2000, 10, 100)

// setTimeout(() => {
//     clearInterval(timerId)
// }, 10000)

class CountDownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.daysSpan = document.querySelector(`${selector} [data-value="days"]`);
    this.hoursSpan = document.querySelector(`${selector} [data-value="hours"]`);
    this.minsSpan = document.querySelector(`${selector} [data-value="mins"]`);
    this.secsSpan = document.querySelector(`${selector} [data-value="secs"]`);
    this.updateMarkup()
  }

  updateMarkup() {
    setInterval(() => {
      const currentTime = Date.now();
      const delta = this.targetDate - currentTime;
      const { days, hours, minutes, seconds } = this.convertMs(delta);
      this.daysSpan.textContent = days;
      this.hoursSpan.textContent = hours;
      this.minsSpan.textContent = minutes;
      this.secsSpan.textContent = seconds;
    }, 1000);
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}

const timer1 = new CountDownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2024"),
});

const timer2 = new CountDownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jan 1, 2025"),
});

const timer3 = new CountDownTimer({
  selector: "#timer-3",
  targetDate: new Date("Sep 1, 2023"),
});

// timer1.updateMarkup();
// timer2.updateMarkup();
// timer3.updateMarkup();
