
// interface TodoInterface {
//   tasks: Array<string>;
//   addTask(task:string) : any;
//   listAllTasks() : any;
//   deleteTask(task: string) : any;
// }

// // Add the reference to the "TodoInterface"
// class Todo implements TodoInterface {
//   tasks = []

//   constructor() {
//   }

//   addTask(task: string) {
//     this.tasks.push(task)
//     return this.tasks.length;
//   }

//   listAllTasks() {
//     this.tasks.forEach((item) => {
//       console.log(item)
//     })
//   }
  
//   deleteTask(task: string) {
//     for (let i = this.tasks.length - 1; i >= 0; i--) {
//       if (this.tasks[i] === task) this.tasks.splice(i, 1);
//     }
//     console.log('Deleted ' + task)
//     return this.tasks.length
//   }

// }

// // 1. Create a class Todo that implements the Interface created before.

// // Execution
// let myTodos = new Todo();
// console.log("Number of items: ", myTodos.addTask('This is our first task'));
// console.log("Number of items: ", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
// console.log("Number of items: ", myTodos.addTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items: ", myTodos.addTask('Finish this iteration 2!! 🤓'));
// console.log("Number of items: ", myTodos.addTask('Finish this iteration 3!! 🤓'));
// myTodos.listAllTasks();
// console.log("Number of items: ", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items: ", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
// myTodos.listAllTasks();
