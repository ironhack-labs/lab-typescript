// Add the reference to the interface
import {ItemInterface} from "./interfaces"

import {TodoInterface} from "./interfaces"

// Create class TodoItem that implements the corresponding interface

class TodoItem implements ItemInterface {
  constructor (
    public title: string,
    public check: boolean,
    public updateAt: string,
  ){}
  
  toggle(){
    if (this.check){this.check = false}
    else {this.check = true}
  };

};



// Create class TodoList that implements the corresponding interface

class TodoList implements TodoInterface {
  constructor (
    public myArray: Array<string> = [],
  ){}
  addTask(task: string){
    this.myArray.push(task);
    console.log(`Task: ${task} inserted in the list`);
    let nbItem: number = this.myArray.length;
    return nbItem;
  };

  listAllTasks(){
    this.myArray.forEach(function(element){
    console.log(element);
    });
  }

  deleteTask(task: string){
    let indexArray: number = this.myArray.indexOf(task);
    this.myArray.splice(indexArray, 1);
    console.log(`Task ${task} removed from the list`);
    let nbItem: number = this.myArray.length;
    return nbItem;
  };

  listUncomplete(){
    this.myArray.forEach(function(element){
      if (element.check){
        console.log(element);
      }
    }); 
  };  

};



// Execution
let task1 = new TodoItem('This is our first task', true, Date());
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!', true, Date());
let task3 = new TodoItem('Finish this iteration 1!! 🤓', true, Date());
let task4 = new TodoItem('Finish this iteration 2!! 🤓', true, Date());
let task5 = new TodoItem('Finish this iteration 3!! 🤓', true, Date());

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


@LazerLight