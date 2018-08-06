
// Add the reference to the "TodoInterface"
// 1. Create a class Todo that implements the Interface created before.
// Execution
import { todoInterface } from "./todoInterface";

let myArray1 = [];

class Todo implements todoInterface {

  constructor(public myArray2: Array<string>) {}

  addTask(target: string): number {
    this.myArray2.push(target);
    console.log(`
    =========== NEW TASK =========== 
    Task "${target}" inserted in the list
    
    Number of items: ${this.myArray2.length}`);

    return this.myArray2.length;
  }

  listAllTasks(): void {
    console.log(...this.myArray2);
  }

  deleteTask(target:string): number {
    let tempIndex: number = this.myArray2.indexOf(target);
    this.myArray2.splice(tempIndex,1);
    console.log(`
    =========== TASK REMOVED ===========
    Task "${target}" removed from the list
    
    Number of items: ${this.myArray2.length}
    `);

    return this.myArray2.length;
  } 

}

let myTodos = new Todo(myArray1);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
