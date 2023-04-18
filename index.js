
// const student = {
//     name: 'Jhon',
//     email: 'jhon@gmail.com',
//     homeworkResults: [],
//     getName() {
//        return this.name
//     },
//     getEmail() {
//         console.log(this.email)
//     },
//     getHWResults() {
//         console.log(this.homeworkResults)
//     },
//     addHomeworkResults(topic, sucess) {
//     //   const item = {topic:topic, sucess:sucess}
//         const item = {topic, sucess}
//         this.homeworkResults.push(item)
//     }
// }

// console.log(student.getName())
// student.getEmail()
// // student.getHWResults()
// student.addHomeworkResults('HTML/CSS', true)
// student.getHWResults()
// student.addHomeworkResults('JS', true)
// student.getHWResults()


// const Student = function (name, email) {
//     const studentName = name;
//     const studentEmail = email;
//     const homeworkResults = [];
  
//     this.getName = function () {
//       return studentName;
//     };
  
//     this.getEmail = function () {
//       return studentEmail;
//     };
  
//     this.getHomeworkResults = function () {
//       return homeworkResults;
//     };
  
//     this.addHomeworkResult = function (topic, success) {
//       homeworkResults.push({ topic: topic, success: success });
//     };
//   };
  
// //   const student1 = new Student('Anna', 'anna@ukr.net')
//   const student2 = new Student('Oleh', 'oleh@ukr.net')
//   console.log(student2)