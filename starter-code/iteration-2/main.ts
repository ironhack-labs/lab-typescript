// Add the reference to the "TodoInterface"
import { List } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

class Todo implements List {

  listArray: string[] = [];


  addTask(task: string): number {
    this.listArray.push(task);
    // console.log('task added');
    return this.listArray.length
  };

  listAllTasks() {
    for (var i = 0; i < this.listArray.length; i++) {
      console.log(this.listArray[i]);
    }
  };

  deleteTask(task: string) {
    this.listArray.splice(0, 1);
    console.log(task, 'deleted');
    return this.listArray.length;
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
