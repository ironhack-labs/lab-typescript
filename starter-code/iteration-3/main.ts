// Add the reference to the interface
import {TodoItemInterface} from './interfaces'
import {TodoListInterface} from './interfaces'
// Create class TodoItem that implements the corresponding interface

export default class TodoItem implements TodoItemInterface {
  status : boolean;
  updatedAt : Date;
  constructor (public title: string){
    this.status = false;
    this.updatedAt = new Date()
  }
  toggleStatus(){
    this.status = !this.status
    this.updatedAt = new Date()
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  todoItems: Array <TodoItem>;
    constructor () {}
    addTask(item: TodoItem){
        this.todoItems.push(item);
        console.log(this.todoItems);
        return this.todoItems.length;
    }

    listAllTasks(){
      this.todoItems.forEach(function (item) {
          console.log(item);
      });
    }
    deleteTask(item: TodoItem){
        this.todoItems.splice(this.todoItems.indexOf(item), 1);
        console.log(item);
        return this.todoItems.length;
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
