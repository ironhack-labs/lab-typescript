// Add the reference to the "TodoInterface"
import {toDo} from './todoInterface';


// 1. Create a class Todo that implements the Interface created before.

class Todo implements toDo {
  arr1: Array<string> = [];
  addTask(task:string) {
    this.arr1.push(task);
    console.log('Added task');
    console.log(this.arr1.length);
    return this.arr1.length;
  }
  listAllTasks() {
    this.arr1.forEach(task => {
      console.log(task);
    });
  }
  deleteTask(task:string) {
    var index = this.arr1.indexOf(task, 0);
    if (index > -1) {
    this.arr1.splice(index, 1);
  }
  console.log('Task deleted');
  console.log(this.arr1.length);
  return this.arr1.length;
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


