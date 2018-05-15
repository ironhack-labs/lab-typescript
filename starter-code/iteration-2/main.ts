// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';

// Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    constructor(public todoArray: string[]) {}

    addTask(task: string){
        this.todoArray.push(task)
        console.log("=========== NEW TASK ===========");
        console.log("Task: ", task);
        return this.todoArray.length;
    }

    listAllTasks(){
        this.todoArray.forEach(task => {
         console.log(task);
        }); 
     }

    deleteTask(task: string){
        for (let i = 0; i < this.todoArray.length; i++) {
            if(this.todoArray[i] === task){
                this.todoArray.splice(i,1);
            };   
        };
        console.log("=========== REMOVED TASK ===========");
        console.log("Task: ", task);
        return this.todoArray.length;
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
