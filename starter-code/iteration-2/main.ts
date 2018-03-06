// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface.js"

class Todo implements TodoInterface {
    //model: string; No me queda claro lo del modelo
    myTask : Array <String> = []
    constructor() {}
  
    addTask (phrase : string){
        return this.myTask.push(phrase);
     }

    listAllTasks() : void {
        this.myTask.forEach((task)=>{
            console.log(task);
        })
    } 

    deleteTask(task) : number {
        this.myTask.forEach((t)=>{
            if (t===task){
                this.myTask.splice(this.myTask.indexOf(t), 1);
            } 
        })
        return this.myTask.length
    }
  }
  
// 1. Create a class Todo that implements the Interface created before.

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
