// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from "./interfaces";


// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  status: boolean;
  updatedAt: Date;
    constructor(public title: string){
      this.status = false;
    }
    toggleStatus():void{
      this.status = !this.status;
    }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface{
    todoItem: Array<TodoItem> = [];
    constructor(){}
    addTask(task: TodoItem):number{
      this.todoItem.push(task);
      console.log('=========== NEW INSERTION ===========');
      return this.todoItem.length;
    }
    listAllTasks(){
      this.todoItem.forEach((task):void =>{
        console.log(task.title,task.updatedAt);
        console.log(task);
      });
    }
    deleteTask(task: TodoItem){
      this.todoItem.map((elem, index):void=>{
        if(task === elem){
          this.todoItem.splice(index, 1);
          console.log("=========== NEW DELETION ===========")
        }
      });
      return this.todoItem.length;
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
//myTodos.listUncomplete();
