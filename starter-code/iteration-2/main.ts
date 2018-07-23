// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  constructor(public tasks: Array<string>){
    this.tasks = tasks
  }
  listAllTasks(): void {
    console.log(this.tasks)
  }
  addTask(task: string): void {
    this.tasks.push(task)
    console.log(task)
  }
  deleteTask(task: string): void {
    console.log(task)
    let tasks = this.tasks
    tasks.forEach(function(e){
      if(e === task) tasks.splice(tasks.indexOf(e),1)
    })
  }
}

// Execution
let array: Array<string> = []
let myTodos = new Todo(array);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
