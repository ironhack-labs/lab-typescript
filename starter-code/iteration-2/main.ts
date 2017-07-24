// Add the reference to the "TodoInterface"
import {todoInterface}from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface {
  constructor(public arr: Array<string>) {}

  addTask(x:string):void {
    this.arr.push(x);
  }

  listAllTasks():void {
    for(let i=0;i<this.arr.length; i++){
      console.log(this.arr[i]);
    };
  }
  deleteTask(x:string):void{
    for(let i=0;i<this.arr.length; i++){
      if(x === this.arr[i]){
        delete this.arr[i];
      }
    };
  }
}

// Execution
let myArray1: Array<string> = [];
let myTodos = new Todo(myArray1);

console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
