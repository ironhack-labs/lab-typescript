// Add the reference to the interface
import {TodoItemInterface} from "./interfaces"
import {TodoListInterface} from "./interfaces"
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  title: string
  status: boolean
  updatedAt: Date

  constructor(title) {
    this.title = title
    this.updatedAt = new Date();
  }
  toggleStatus(status): boolean {
    if(status) {
      return !status;
    }
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  constructor(public todoItem: Array<string> =[]) {}
  addTask(item): number {
    this.todoItem.push(item)
    console.log('Task ' + item.title + 'inserted in the list')
    return this.todoItem.length
  }
  listAllTasks(): void {
    this.todoItem.forEach(function(item) {
      console.log(item)
    })
  }
  deleteTask(item): number {
    let  index = this.todoItem.indexOf(item)
    this.todoItem.splice(index ,1)
    console.log('Task ' + item + 'removed from the list')
    return this.todoItem.length
  }
}

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
//myTodos.listUncomplete();
