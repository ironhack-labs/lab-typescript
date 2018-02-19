// Add the reference to the "TodoInterface"

import { TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    a:Array<string>;
    addTask= function (task:string):number{
        a.push(task);
        return a.length;
    }
    listAllTask = function ():void{
     a.forEach((e)=>{
     console.log(e);
    });
}
    deleteTask = function (task:string):number{
        let i = a.indexOf(task)
        a.splice(i,1);
        return a.length
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
