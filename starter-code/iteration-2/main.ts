// Add the reference to the "TodoInterface"
import { ToDoList } from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements ToDoList {
  tasks: Array<string> = [];
  addTask = (task) => {
    this.tasks.push(task);
    return task;
  }
  listAllTasks = () => {
    console.log(this.tasks);
  }
  deleteTask = (task) => {
    let taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
    return this.tasks.length;
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
