// Add the reference to the interface
import {todoInterface, todoList}from './interfaces';
// Create class TodoItem that implements the corresponding interface
export class TodoItem implements todoInterface{
  constructor(public title:string, public itsDone:boolean, public updatedAt:Date){
    this.itsDone=false;
    this.updatedAt= new Date();
  }

  toogle():void{
    if(this.itsDone){
      this.itsDone=false;
    }
    else{
      this.itsDone=true;
    }
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements todoList{
  constructor(public TodoItems:Array<TodoItem>){}
  addTask(TodoItem):number{
    this.TodoItems.push(TodoItem);
    return this.TodoItems.length;
  }
  listAllTasks():void{
    for(let i=0;i<this.TodoItems.length; i++){
      console.log(this.TodoItems[i].title);
  }
}
  deleteTask(TodoItem):number{
    for(let i=0;i<this.TodoItems.length; i++){
      if(TodoItem === this.TodoItems[i]){
        delete this.TodoItems[i];
        return this.TodoItems.length;
  }
}
}
  listUncomplete():void{
    for(let i=0;i<this.TodoItems.length; i++){
      if(this.TodoItems[i].itsDone==false){
          console.log(this.TodoItems[i]);
      };

  }
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
