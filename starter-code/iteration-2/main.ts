// Add the reference to the "TodoInterface"
import { ToDoList } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements ToDoList {
  constructor(
      public tasks: Array<string> = []
    ) {}

  addTask(task: string) {
    this.tasks.push(task);
    console.log(`Task ${task} added! `);
    console.log(this.tasks.length);
    return this.tasks.length;
  }
  listAllTasks() {
    this.tasks.forEach(oneTask => {
      console.log(oneTask);
    });
  }
  deleteTask(task: string) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    console.log(`Deleted ${index} ${task}`);
    console.log(`Tasks left ${this.tasks.length}`);
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
