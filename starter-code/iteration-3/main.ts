// Add the reference to the interface
import {ITodoItem, ITodoList} from './interfaces'
// Create class TodoItem that implements the corresponding interface


export class TodoItem implements ITodoItem{
  status: boolean = false;
  updatedAt: any = new Date();

  constructor (public title: string) {}

  toggleStatus(): void {
    if (!this.status) {
      this.status = true;
      this.updatedAt = new Date();

    } else {
      this.status = false;
      this.updatedAt = new Date();
    }
     
  }
};

// Create class TodoList that implements the corresponding interface

class TodoList implements ITodoList  {
   tasks: TodoItem[] = [];
   
   addTask(task:TodoItem): number {
    this.tasks.push(task);
    console.log(`=========== NEW TASK ===========`);
    console.log(`Task "${task.title}" inserted in the list`);
    return this.tasks.length;
  }

  listAllTasks(): void {
    this.tasks.forEach(task => console.log(task))
  }

  deleteTask(task:TodoItem): number {
    this.tasks.splice(this.tasks.indexOf(task), 1)
    console.log(`=========== TASK REMOVED ===========`);
    console.log(`Task "${task.title}" removed from the list`);
    return this.tasks.length;
  }

  listUncomplete():void {
    this.tasks.forEach(task => task.toggleStatus())
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
