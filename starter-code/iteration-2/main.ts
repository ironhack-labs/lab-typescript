// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(public todos: Array<string> =[]) {}
  addTask(task): number {
    this.todos.push(task)
    console.log('Task ' + task + 'inserted in the list')
    return this.todos.length
  }
  listAllTasks(): void {
    this.todos.forEach(function(task) {
      console.log(task)
    })
  }
  deleteTask(task): number {
    let  index = this.todos.indexOf(task)
    this.todos.splice(index ,1)
    console.log('Task ' + task + 'removed from the list')
    return this.todos.length
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
