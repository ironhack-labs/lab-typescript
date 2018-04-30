// Add the reference to the interface
import {firstInterface} from './interfaces';
import {secondInterface} from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements firstInterface{
  tic: boolean;
  updatedAt : Date;

  constructor(public title: string){};

  ticfunction(){
    return (this.tic) ? this.tic = false : this.tic = true;
  };

}
// Create class TodoList that implements the corresponding interface


class TodoList implements secondInterface{
  property : Array <TodoItem> = [];

  constructor(){}
  
  addTask(str):number{
    this.property.push(str);
    return this.property.length;
  }
  listAllTasks() : void{
    this.property.forEach(e => console.log(e.title));
  }
  deleteTask(str) : number{
    this.property.forEach((e, index) =>{
      if(e == str)this.property.splice(index, 1);
    })
    return this.property.length;
  }
  listUncomplete():void{
    let array = [];
    this.property.forEach(e => {
      if(!e.tic) array.push(e.title)
    })
    array.forEach(e => console.log(e))

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
