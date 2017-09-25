// Add the reference to the interface
import {TodoItemInterface} from "./interfaces";
import {TodoListInterface} from "./interfaces";
// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface{
  constructor(public title: string, public status: boolean, public updatedAt: Date){ }
  toggleStatus(){
    this.status = !this.status;
    this.updatedAt = new Date();
  }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface{
  constructor(public TodoItems: string[]){ }
  addTask(item){
    this.TodoItems.push(item);
    console.log(this.TodoItems.length)
  }
  listAllTasks(){
    console.log(this.TodoItems);
  }
  deleteTask(item){
    this.TodoItems.splice(this.TodoItems.indexOf(item), 1);
  }
  listUncomplete(){
    TodoItems.forEach((item)=>{
      if(item.status === false){
        console.log(item)
      }
    });
  }
}

const TodoItems=[];
// Execution
let task1 = new TodoItem('This is our first task', false, new Date());
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date());
let task3 = new TodoItem('Finish this iteration 1!! 🤓', false, new Date());
let task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date());
let task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date());

let myTodos = new TodoList(TodoItems);

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
