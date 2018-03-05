// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface.js"


class Todo implements TodoInterface {
    list: Array<string>=[];
    constructor (){};

    addTask(task:string):number {
        this.list.push(task);
        return this.list.length;
        
     }
     // 3. Create a function to list all tasks, it must show in the console de task.
     listAllTasks():void {
        this.list.forEach(item=>{
          console.log(item);
        })
     }
     // 4. Create a function to delete a task, you must find the task inside the array and delete it.
     deleteTask (item:string):number {
       let ind= this.list.indexOf(item);
       this.list.splice(ind,1);
        return this.list.length;
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
