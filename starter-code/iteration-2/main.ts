// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';

class Todo implements TodoInterface {

  constructor (
    public tasks: Array<string> = [],
  ){ }

   addTask (task: string) {
    this.tasks.push(task);
    console.log(`----- NEW TASK ------>  task "${task}" was added to the list.`);
    return `${this.tasks.length}`
  }

  listAllTasks() {
    this.tasks.forEach(function(task) {
      console.log(`${task}`);
    });
}

  deleteTask (task: string) {
    const index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks.splice (index, 1);
      console.log('======== DELETE TASK ========')
    }

    return `${this.tasks.length}`
}
}
// 1. Create a class Todo that implements the Interface created before.

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
