// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  tasks: Array<string>

  addTask(task):number {
    this.tasks.push(task);

    console.log('Added task!');

    return this.tasks.length;
  }

  listAllTasks():void {
    this.tasks.forEach(function(task){
      console.log("Task:" + task)
    });
  }

  deleteTask(string):number {
    this.tasks = this.tasks.filter(task => task !== string);

    console.log("Task deleted!");

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
