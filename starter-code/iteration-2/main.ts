// Add the reference to the "TodoInterface"
import {TodoInterface} from './todoInterface'


// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  myArrayOfStrings : Array<string> = []
    constructor() { }
    addTask(task) : number{
      console.log('message inserted')
      return this.myArrayOfStrings.length;
    };
    listAllTasks(): void{
      this.myArrayOfStrings.forEach(list => {
        console.log(list)}
      )};
    deleteTask(task) : number{
      const index = this.myArrayOfStrings.indexOf(task)
      this.myArrayOfStrings.splice(index, 1);
      return this.myArrayOfStrings.length;
    };
      
    
    
  };


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


