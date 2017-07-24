// Add the reference to the interface
import { TodoItemInterface } from "./interfaces";
import { TodoListInterface } from "./interfaces";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;

  constructor (taskTitle: string) {
    this.title = taskTitle;
    this.updatedAt = new Date;
    this.status = false;
  }

  toggleStatus(): void {
    if ( this.status ) {
      this.status = false;
    } else {
      this.status = true;
    }
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  toDoItemsArray: Array<TodoItemInterface>;

  constructor () {
    this.toDoItemsArray = [];
  }

  addTask(task): number {
    this.toDoItemsArray.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("Task "+ task.title +" inserted in the list");
    return this.toDoItemsArray.length;
  }

  listAllTasks(): void {
    console.log("=========== LIST OF TASKS ===========");
    this.toDoItemsArray.forEach(function(task: TodoItemInterface) {
      console.log("- ", task.title);
    })
  }

  deleteTask(task): number {
    let taskIndex = this.toDoItemsArray.indexOf(task);
    console.log(taskIndex)
    this.toDoItemsArray.splice(taskIndex,1);
    console.log("=========== TASK REMOVED ===========");
    console.log("Task "+ task.title +" removed from the list");
    return this.toDoItemsArray.length;
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
// myTodos.listUncomplete();
