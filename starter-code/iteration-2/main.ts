// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
const l: any = console.log;

class Todo implements TodoInterface {

    constructor(public myArray : Array<string>) {} // 

    addTask(task : string): number {
        this.myArray.push(task);
        l(
            `=========== NEW TASK ===========
  Task ${task} inserted in the list
  Number of items: ${this.myArray.length}`
        );
        return this.myArray.length;
    }
    listAllTasks():void{
      l(...this.myArray);
    }
    deleteTask(task:string):number{
      let str:number = this.myArray.indexOf(task); 
      this.myArray.splice(str,1);
      l(`=========== TASK REMOVED ===========
      Task "${task}" removed from the list
      
      Number of items: ${this.myArray.length}`);
      return this.myArray.length;
    }
}
// Execution
let myArray: Array<string> = [];

let myTodos = new Todo(myArray); 
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log(
    "Number of items:",
    myTodos.addTask('Finish this iteration 1!! 🤓')
);
console.log(
    "Number of items:",
    myTodos.addTask('Finish this iteration 2!! 🤓')
);
console.log(
    "Number of items:",
    myTodos.addTask('Finish this iteration 3!! 🤓')
);
myTodos.listAllTasks();
console.log(
    "Number of items:",
    myTodos.deleteTask('Finish this iteration 1!! 🤓')
);
console.log(
    "Number of items:",
    myTodos.deleteTask('Finish this iteration 2!! 🤓')
);
myTodos.listAllTasks();
