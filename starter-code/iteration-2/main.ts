// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface'

// 1. Create a class Todo that implements the Interface created before.
  class Todo implements TodoInterface {
    tasksArr: Array<String> = [];

    constructor() {}

    addTask(task: string):number {
      this.tasksArr.push(task);
      console.log(`Task ${task} inserted in the list
      Number of items: ${this.tasksArr.length }`)
      return this.tasksArr.length;
    }

    listAllTasks():void {
      this.tasksArr.forEach(function(e){
        console.log(e);
      })
    }

    deleteTask(task:string):number {
      let indice = this.tasksArr.indexOf(task);
      this.tasksArr.splice(indice, 1 )
      console.log(`Task ${task} removed from the list
      Number of items ${this.tasksArr.length}`)
      return this.tasksArr.length;
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
