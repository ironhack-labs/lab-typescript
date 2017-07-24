// Add the reference to the "TodoInterface"

import {TodoInterface} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  constructor (public taskList: Array<string> = []) {}

    addTask (task:string) {
        this.taskList.push(task);
        console.log(`Task ${task} inserted in the list`)
        console.log(`Number of items ${this.taskList.length}`)
        return this.taskList.length
    }

    listAllTasks () {
      this.taskList.forEach(function(element) {
        console.log(element)
      }
    )}

    deleteTask (task:string) {
      this.taskList.splice(this.taskList.indexOf(task),1);
      console.log(`Task ${task} removed from the list`)
      console.log(`Number of items ${this.taskList.length}`)
      return this.taskList.length
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
