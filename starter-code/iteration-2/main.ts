// Add the reference to the "TodoInterface"
import {Todo} from "../iteration-2/todoInterface.js"

// 1. Create a class Todo that implements the Interface created before.
class TodoList implements Todo {
    tasks;
    
    constructor(){
        this.tasks = [];
    };

    addTask(taskToAdd:string):number{
        this.tasks.push(taskToAdd);
        console.log(`
        =========== NEW TASK ===========
        Task "${taskToAdd}" inserted in the list
        Number of items: ${this.tasks.length}`);
        return this.tasks.length;
    }

    listAllTasks():void{
        this.tasks.forEach(task => {
            console.log(task);
        });
    }

    deleteTask(taskToDelete:string):number{
        this.tasks.forEach((task) => {
            if(task===taskToDelete){
                this.tasks.splice(this.tasks.indexOf(task),1)
                console.log(`
                =========== TASK REMOVED ===========
                Task "${taskToDelete}" removed from the list
                Number of items: ${this.tasks.length}`)
            }
        });
    
        return this.tasks.length;
    }
    

}
// Execution
let myTodos = new TodoList();
console.log("Number of itemfs:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
