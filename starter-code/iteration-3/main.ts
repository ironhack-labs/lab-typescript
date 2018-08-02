// Add the reference to the interface
import {TaskName, Task} from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TaskName {
  // status:    boolean;
  // updatedAt: Date;

  constructor(public title: string) {}

  updatedAt = new Date();
  status = false;

  toggleStatus(): void {
    this.status = !this.status;
    this.updatedAt = new Date();
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements Task {
  constructor(public tasks: Array<TodoItem>) {}

  addTask(task: TodoItem): Number {
    this.tasks.push(task);
    console.log(`=========== NEW TASK ===========
      Task "${task.title}" inserted in the list`);
    return this.tasks.length;
  }

  listAllTasks(): void {
    this.tasks.forEach(task => {
      console.log(task.title);
    })
  }

  deleteTask(task: TodoItem): Number {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
    console.log(`=========== TASK REMOVED ===========
      Task "${task.title}" removed from the list`);
    return this.tasks.length;
  }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList([]);

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
