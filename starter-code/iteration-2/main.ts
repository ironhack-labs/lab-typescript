// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.

// Execution

import { taskInterface } from './todointerface';

class Todo implements taskInterface {
  constructor(public myArray: Array<string>) {}

  addTask(task: string):Number {
    this.myArray.push(task);
    console.log(task + "inserted in the list");
    console.log("Number of items " + this.myArray.length);
    return this.myArray.length;
  }

  listAllTasks():void {
    for (var i = 0; i < this.myArray.length; i++) {
      console.log(this.myArray[i]);
      console.log("Number of items " + this.myArray.length);
    }
  }

  deleteTask(task: string): Number {
    this.myArray.splice(this.myArray.indexOf(task), 1);
    console.log(task + "remove from the list");
    console.log("Number of items " + this.myArray.length);
    return this.myArray.length;
  }
}

let myTodos = new Todo(["comprar huevos", "sacar al perro", "llevar a Luis a clase de piano"]);

console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
