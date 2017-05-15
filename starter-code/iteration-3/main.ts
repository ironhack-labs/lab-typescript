// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from "./interfaces"
// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface{
  constructor(public taskTitle: string, ){}

  status: boolean = false;
  updatedAt: Date;

  toggleStatus():void{
    if (this.status === false){
      this.status = true;
    } else {
      this.status = false;
    }
      this.updatedAt = new Date(new Date().getDate());
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
  toDoArray:Array<TodoItem> =[];

  addTask(task):void{
    this.toDoArray.push(task);
    console.log("=========== NEW TASK ==========  Task " + task + " added to the list");
    console.log("Number of items: " + this.toDoArray.length);
  }

  listAllTasks():void{
    for (let i in this.toDoArray){
      console.log(this.toDoArray[i]);
    }
  }

  deleteTask(task):void{
    let deleteItem = this.toDoArray.indexOf(task);
    this.toDoArray.splice(deleteItem, 1);
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
