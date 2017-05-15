// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class TodoList implements TodoInterface {
  todos = [];
  constructor() {}

  addTask(todo) {
    this.todos.push(todo);
  }
  listAllTasks() {
    this.todos.forEach(todo => {
      console.log(todo);
    });
  }
  deleteTask(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
// Execution
let myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
