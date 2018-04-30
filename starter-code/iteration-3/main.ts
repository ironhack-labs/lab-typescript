// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from "./interfaces";

// Create class TodoItem that implements the corresponding interface

export class TodoItem implements TodoItemInterface {
  constructor(public title: string) {}
  status: boolean;
  updatedAt: Date;
  toggleStatus(): void {
    this.status ? (this.status = false) : (this.status = true);
    this.updatedAt = new Date();
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  todoItems: Array<TodoItem> = [];

  addTask(task: TodoItem): number {
    this.todoItems.push(task);
    console.log(`=========== NEW TASK ===========
    Task ${task} inserted in the list
    Number of items: ${this.todoItems.length}`);
    return this.todoItems.length;
  }

  listAllTasks(): void {
    this.todoItems.forEach(e => {
      console.log(`TASK: ${e}`);
    });
  }

  deleteTask(task: TodoItem): number {
    let removedTask = this.todoItems.splice(this.todoItems.indexOf(task), 1);
    console.log(`=========== TASK REMOVED ===========
    Task ${removedTask} removed from the list
    Number of items: ${this.todoItems.length}`);
    return this.todoItems.length;
  }

  listUncomplete(): void {
    this.todoItems.forEach(e => {
      if (!e.status) console.log(e.title);
    });
  }
}
// Execution
let task1 = new TodoItem("This is our first task");
let task2 = new TodoItem("Eat pizza 🍕 yummy!!!");
let task3 = new TodoItem("Finish this iteration 1!! 🤓");
let task4 = new TodoItem("Finish this iteration 2!! 🤓");
let task5 = new TodoItem("Finish this iteration 3!! 🤓");

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
