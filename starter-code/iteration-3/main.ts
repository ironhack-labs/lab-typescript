// Add the reference to the interface
import { ITodoItem, ITodoList } from "./interfaces"
// Create class TodoItem that implements the corresponding interface
class TodoItem implements ITodoItem {
  title: string;
  done: boolean;
  updatedAt: Date;

  constructor(title: string) {
    this.title = title;
    this.done = false;
    this.updatedAt = null;
  }

  toogle = (): void => {
    this.done = !this.done;
    this.updatedAt = new Date();
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements ITodoList {
  todoItems: ITodoItem[];

  constructor() {
    this.todoItems = [];
  }

  addTask = (task: TodoItem): number => {
    this.todoItems.push(task);
    console.log(`Task "${task.title}" inserted in the list`);
    return this.todoItems.length;
  };

  listAllTasks = (): void => {
    this.todoItems.forEach((task) => {
      console.log(task.title,', updatedDate: ', task.updatedAt);
    });
  }

  deleteTask = (task: TodoItem): number => {
    for (var i = this.todoItems.length - 1; i >= 0; i--) {
      if (this.todoItems[i].title === task.title) {
        this.todoItems.splice(i, 1);
        console.log(`Task "${task.title}" removed from the list`);
        break;
      }
    }
    return this.todoItems.length;
  }

  listUncomplete = (): void => {
    this.todoItems.forEach((task) => {
      if (task.done) {
        console.log(task.title,', updatedDate: ', task.updatedAt);
      }
    });
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
myTodos.listUncomplete();
