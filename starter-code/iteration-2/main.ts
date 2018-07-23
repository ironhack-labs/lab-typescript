// Add the reference to the "TodoInterface"
import {toDointerface} from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDointerface {
  tasks = [];
  addTask(task: string): void {
    this.tasks.push(task);
  }
  listAllTasks(): void {
    for (let task of this.tasks) {
      console.log(task);
    }
  }
  deleteTask(task: string): void {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index,1)
  }
}
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
