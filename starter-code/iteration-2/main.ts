// Add the reference to the "TodoInterface"

import {
    TodoInterface
} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

    class Todo implements TodoInterface{
        myArray:Array <string> = [];
        constructor (){}
        addTask (task:string){
            this.myArray.push (task);
            console.log ("Task añadida")
            return this.myArray.length;
        }
        
        // 3. Create a function to list all tasks, it must show in the console de task.
        
         listAllTasks (){
            this.myArray.forEach(element => {
                console.log (element)
            });
        }
        
        // 4. Create a function to delete a task, you must find the task inside the array and delete it.
         deleteTask (task){
            let index = this.myArray.indexOf(task);
            this.myArray.splice(index,1);
            console.log ("elemento borrado");
            console.log (this.myArray.length)
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
