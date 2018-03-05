// Add the reference to the interface
import { TodoItemInterface } from "./interfaces"
import { TodoListInterface } from "./interfaces"

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  constructor(public title: string, public updatedAt: Date) {};

  status: boolean;
  toggleStatus() {
    this.status = !status;
    this.updatedAt = new Date();
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  list: Array<TodoItem> = [];

  addTask(task) {
    this.list.push(task);

    console.log('Added task!');

    return this.list.length;
  }

  listAllTasks() {
    this.list.forEach(function(task) {
      console.log(`Task ${task.title} added on: ${task.updatedAt}`)
    })
  }

  deleteTask(deletedTask):number {
    this.list = this.list.filter(task => task !== deletedTask);

    console.log("Task deleted!");

    return this.list.length;
  }
}

// Execution
let task1 = new TodoItem('This is our first task', new Date());
task1.toggleStatus
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!', new Date());
let task3 = new TodoItem('Finish this iteration 1!! 🤓', new Date());
let task4 = new TodoItem('Finish this iteration 2!! 🤓', new Date());
let task5 = new TodoItem('Finish this iteration 3!! 🤓', new Date());

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
