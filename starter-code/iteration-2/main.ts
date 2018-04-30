// Add the reference to the "TodoInterface"
import {todoInterface} from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface{
  property : Array <string> = [];

  constructor(){}
  
  addTask(str):number{
    this.property.push(str);
    return this.property.length;
  }
  listAllTasks() : void{
    this.property.forEach(e => console.log(e));
  }
  deleteTask(str) : number{
    this.property.forEach((e, index) =>{
      if(e == str)this.property.splice(index, 1);
    })
    return this.property.length;
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
