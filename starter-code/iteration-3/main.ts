// Add the reference to the interface
import {TodoItemInterface } from "./interfaces";
import {TodoInterface } from "./interfaces";



// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  constructor(public title :String){}
  public status: boolean;
  public updateAt: Date;
  public toogleStatus = function  (){
    if(this.status) {
      this.status=false;
    }else this.status =true;
  };
}


// Create class TodoList that implements the corresponding interface

class TodoList implements TodoInterface{
  constructor(public taskArray:Array<TodoItem>){}

  addTask = function(task:TodoItem): Number
    {
      task.updateAt =new Date();
      console.log("Task :"+ task.title + "inserted in the list");
      this.taskArray.push(task);
      return this.taskArray.length;
    }

    listAllTasks = function () : void {
      this.taskArray.forEach( e => {
        console.log(e.title);
        console.log(e.updateAt);
      });
    }

    deleteTask = function (task:TodoItem): Number
    {
      let index = this.taskArray.indexOf (task);
      this.taskArray.splice(index,1);
      console.log("Task :" + task.title + "removed from the list");
      return this.taskArray.length;
    };
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let arr =[];
let myTodos = new TodoList(arr);

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
