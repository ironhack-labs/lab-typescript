// Add the reference to the interface
import { ToDoItemInterface } from './interfaces'
import { ToDoInterface } from './interfaces'

// Create class TodoItem that implements the corresponding interface
export class TodoItem implements ToDoItemInterface {

  constructor(title: string) {
    this.title = title;
  }

  title: string = this.title;
  isDone: boolean = false;

  updatedAt: Date = new Date;

  toggleStatus(): void {
    if (this.isDone === true) {
      this.isDone = false;
    }
    else {
      this.isDone = true;
    }
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements ToDoInterface {

  constructor() {}

  toDoArray: TodoItem[] = [];

  addTask(task: TodoItem): number {
    this.toDoArray.push(task);
    return this.toDoArray.length;
  }

  listAllTasks(): void {
    console.log('========== All Tasks ==========');
    this.toDoArray.forEach( (oneTask) => {
      console.log(oneTask.title)
    })
  }

  deleteTask(task: TodoItem): number {
    for (let i = 0; i < this.toDoArray.length; i++) {
      if (this.toDoArray[i] === task) {
        this.toDoArray.splice(i, 1);
      }
    }
    return this.toDoArray.length;
  }

  listIncomplete(): number {
    console.log('========== All Unfinished Tasks ==========');
    this.toDoArray.forEach( (oneTask) => {
      if (!oneTask.isDone) {
        console.log(oneTask.title);
      }
    });
    return;
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
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listAllTasks();
task1.toggleStatus();
task2.toggleStatus();
myTodos.listIncomplete();
