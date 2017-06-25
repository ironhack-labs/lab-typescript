import { TodoItemInterface, TodoListInterface } from "./interfaces";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  title: string   = "";
  status: boolean = false;
  updatedAt: Date;

  constructor(title: string = "New task") {
    this.title     = title;
    this.updatedAt = new Date();
  }

  toggleStatus() {
    this.status   != this.status;
    this.updatedAt = new Date();
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  tasks: Array<TodoItem> = [];

  addTask(task: TodoItem): number {
    this.tasks.push(task);

    console.log("=========== NEW INSERTION ===========");
    console.log(`Task "${task}" inserted in the list`);

    return this.tasks.length;
  }

  deleteTask(task: TodoItem): number {
    var index = this.tasks.indexOf(task);
    if(index >=0){
    this.tasks.splice(index, 1);

    console.log("=========== NEW DELETION ===========");
    console.log(`Task "${task}" removed from the list`);

  }else{
    console.log(`Sorry, couldn't find task ${task}`)
  }
  return this.tasks.length;
  }

  listAllTasks(): void {
    console.log("=========== TASKS ===========");

    this.tasks.forEach((task) => {
      console.log(`${task.title}, ${task.updatedAt}`);
    });
  }

  listIncomplete(): void {
    this.tasks.forEach((task) => {
      if (!task.status) {
        console.log(`Pending: ${task.title}, ${task.updatedAt}`);
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
myTodos.listIncomplete();

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
