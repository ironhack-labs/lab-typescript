// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
    constructor(public myArray: Array<string>){}

    addTask(task1): number{
      this.myArray.push(task1)
      return this.myArray.length
    }

    listAllTasks():void{
      for (let string of this.myArray){
        console.log(string)
    }
    }

    deleteTask(task2): number{
      var remove = this.myArray.indexOf(task2);
      this.myArray.splice(remove, 1)
      return this.myArray.length
    }
}

// Execution
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
