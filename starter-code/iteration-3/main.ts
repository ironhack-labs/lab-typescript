// Add the reference to the interface
import {TodoItemInterface} from "./interfaces"
import {TodoInterface} from "./interfaces"

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  constructor(public title: string, public done: boolean = false, public updatedAt: Date = new Date()){
    this.title = title
    this.done = done
    this.updatedAt = updatedAt
  }
  toggle(): void {
    if(this.done === true) this.done = false;
    this.done = true
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface{
  constructor(public TodoItem: Array<TodoItem>){
    this.TodoItem = TodoItem
  }
  listAllTasks(): void {
    console.log(this.TodoItem)
  }
  addTask(task: TodoItem): void {
    this.TodoItem.push(task)
    console.log(task)
  }
  deleteTask(task: TodoItem): void {
    console.log(task)
    let TodoItem = this.TodoItem
    TodoItem.forEach(function(e){
      if(e === task) TodoItem.splice(TodoItem.indexOf(e),1)
    })
  }
  listUncomplete(): void {
    console.log(this.TodoItem)
  }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let array: Array<TodoItem> = []
let myTodos = new TodoList(array);

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
