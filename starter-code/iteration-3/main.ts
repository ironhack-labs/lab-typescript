// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
  isDone() {
    this.status != this.status;
    this.updatedAt = new Date();
  }

  constructor(title: string) {
    this.title = title;
    this.updatedAt = new Date();
  }
  
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  tasks: Array<TodoItem> = [];
  addTask(task: TodoItem): number {
    this.tasks.push(task);
    console.log('NEW TASK ADDED:')
    console.log(`${this.tasks[this.tasks.length - 1].title} | ${this.tasks[this.tasks.length - 1].updatedAt}`);
    return this.tasks.length;
  };

  listAllTasks(): void {
    console.log('YOUR TASKS:');
    this.tasks.forEach((task) => {
      console.log(`${task.title} | ${task.updatedAt}`);
    })
  };

  deleteTask(task: TodoItem): number {
    let taskIndex: number = this.tasks.indexOf(task);
    this.tasks.splice(0, taskIndex);
    console.log('THIS TASK WAS DELETED');
    console.log(`${taskIndex}`)
    return this.tasks.length;
  };

  listUncomplete(): void {
    for (let task of this.tasks) {
      if (!task.status) {
        console.log(`${task.title} | ${task.updatedAt}`);
      }
    }
  };

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
