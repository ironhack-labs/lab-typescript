// Add the reference to the "TodoInterface"

import {TodoInterface} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  myArray: Array<string> = [];

  addTask(task:string):number{
    console.log("=========== NEW INSERTION ===========");
    console.log(`Task ${task} inserted in the list`);
    this.myArray.push(task);
    return this.myArray.length;
  };

  listAllTasks():void{
    this.myArray.map((item)=>{
    console.log(item);
    });
  };

   deleteTask(task:string){
      this.myArray.map((item,index)=>{
        if(item === task){
          this.myArray.splice(index,1);
        }
    })
    console.log("=========== NEW DELETION ===========");
    console.log(`Task ${task} removed from the list`);
      return this.myArray.length;
    }
}


// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
