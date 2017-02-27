// Add the reference to the interface
import {TodoItemInterface} from "./interfaces";
import {TodoListInterface} from "./interfaces";

// 1. Create a class Todo that implements the Interface created before.
class TodoItem implements TodoItemInterface {
  constructor(public title: string, public status: boolian,public updatedAt: date) {}

  toggleStatus() {
    if (this.status = false) {this.status = true}
    else if (this.status = true) {this.status = false}
    this.updatedAt = today;
  }

}

class TodoList implements TodoListInterface {
  constructor(public myArray: Array<TodoItem> = []) {}

  addTask(task: string): number{
    this.myArray.push(task)
    return this.myArray.length;
  }

  listAllTasks() {
    this.myArray.forEach((elem)=>{console.log(elem.updatedAt),console.log(elem.title)})
  }

  deleteTask(task: string): number {
  let position = this.myArray.indexOf(task);
    this.myArray.splice(position, 1)
    return this.myArray.length;
  }
}

// Create class TodoItem that implements the corresponding interface

// Create class TodoList that implements the corresponding interface

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
