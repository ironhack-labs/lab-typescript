// Add the reference to the interface

import { TodoItem } from './interfaces';
import { TodoListInterface } from './interfaces';

// Create class TodoItem that implements the corresponding interface
class Todo implements TodoItem {
  title: string;
  status: boolean;
  updatedAt: Date;

  constructor(title:string){
    this.title = title;
    this.status = false;
    this.updatedAt = new Date();
  }

  toggleStatus():void {
    if(this.status == true){
      this.status = false;
      this.updatedAt = new Date();
    }else{
      this.status = true;
      this.updatedAt = new Date();
    }
  }

}
class TodoList implements TodoListInterface {
  tasks: Array<TodoItem> = [];

  constructor(){}

  addTask(task:TodoItem):number{
    this.tasks.push(task);
    console.log(`Task inserted ${task}`);
    return this.tasks.length
  }

  listAllTasks():void{
    this.tasks.forEach((elem) => {console.log(elem)})
  }

  deleteTask(task:TodoItem):number{
    this.tasks = this.tasks.filter(elem => {
      return elem !== task;
    });

    console.log(`task deleted: ${task}`);

    return this.tasks.length
  }

  listUncomplete():void{
    this.tasks.forEach((elem) => {
      if(elem.status == false) console.log(elem);
    })
  }
}

// Create class TodoList that implements the corresponding interface

// Execution
let task1 = new Todo('This is our first task');
let task2 = new Todo('Eat pizza 🍕 yummy!!!');
let task3 = new Todo('Finish this iteration 1!! 🤓');
let task4 = new Todo('Finish this iteration 2!! 🤓');
let task5 = new Todo('Finish this iteration 3!! 🤓');

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
