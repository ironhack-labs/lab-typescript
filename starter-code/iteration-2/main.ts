// Add the reference to the "TodoInterface"
import {TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(){ }
  chao:Array<string>=[];
    addTask(value):number {
    this.chao.push(value)
    console.log("Element inserted", this.chao.length)
    return this.chao.length
  }
  listAllTask():void {
    console.log(this.chao)
  }
  delete(value: string):number {
    this.chao.splice(this.chao.indexOf(value), 1)
    console.log("Element deleted", this.chao.length)
    return this.chao.length
  }

}
// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTask();
console.log("Number of items:", myTodos.delete('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.delete('Finish this iteration 2!! 🤓'));
myTodos.listAllTask();
