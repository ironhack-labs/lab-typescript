// Add the reference to the interface
import { ToDoItem, ToDo } from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements ToDoItem {
  // title string field, to indicate what the task entails.
  constructor(public title: string) {};

  // updatedAt date field, to indicate the date that the task was last updated.
  updatedAt: Date;
  // status that will indicate if the task is completed or not.
  status: boolean;
  toggleStatus() {
    this.status = !status;
    this.updatedAt = new Date();
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements ToDo{
  // An Array of TodoItems to be able to save the different tasks you want to do.
  itemList: Array<TodoItem> = [];
  // Create an addTask function
  addTask(task) {
    this.itemList.push(task);
    console.log('Added task!');
    return this.itemList.length;
  }

  // Create a listAllTasks function:
  listAllTasks() {
    this.itemList.forEach(function(task) {
      console.log(`Task ${task.title} added on: ${task.updatedAt}`)
    })
  }
  // Create a deleteTask function:
  deleteTask(deletedTask):number {
    this.itemList = this.itemList.filter(task => task !== deletedTask);

    console.log("Task deleted!");

    return this.itemList.length;
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
