// Add the reference to the "TodoInterface"

import {TodoInterface} from "./todoInterface"

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  constructor (
    public myArray: Array<string> = [],
  ){}

  addTask(task: string){
    this.myArray.push(task);
    console.log(`Task: ${task} inserted in the list`);
    let nbItem: number = this.myArray.length;
    return nbItem;
  };

  listAllTasks(){
    this.myArray.forEach(function(element){
    console.log(element);
    });
  }

  deleteTask(task: string){
    let indexArray: number = this.myArray.indexOf(task);
    this.myArray.splice(indexArray, 1);
    console.log(`Task ${task} removed from the list`);
    let nbItem: number = this.myArray.length;
    return nbItem;
  };

};



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
