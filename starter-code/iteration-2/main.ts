// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
    array:Array<string> = [];
    addTask(task:string):number{
        console.log("=========== NEW TASK ===========");
        console.log(`Task "${task}" inserted in the list`);
        this.array.push(task);
        return this.array.length
    }
    listAllTasks():void{
        this.array.forEach(element => {
            console.log(element);
        });
    }
    deleteTask(task):number{
        this.array.splice(task, 1);
        console.log("=========== TASK REMOVED ===========");
        console.log(`Task ${task} removed from the list`);
        return this.array.length;
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
