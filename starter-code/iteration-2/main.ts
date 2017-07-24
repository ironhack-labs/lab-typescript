// Add the reference to the "TodoInterface"
import {ParaHacer} from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements ParaHacer {
   constructor(public arrayOfTasks: string[]) {}

    addTask(task: string):number{
        console.log("added task and new length is: ");
    return this.arrayOfTasks.push(task);
    };

    listAllTasks(): void {
        for(var task of this.arrayOfTasks){
    console.log(task); 
        }
    };
    deleteTask(task: string): number {
        let index = this.arrayOfTasks.indexOf(task);
        if(index > -1){
            this.arrayOfTasks.splice(index, 1);
        }
        return this.arrayOfTasks.length;
    }
} 


// Execution
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
