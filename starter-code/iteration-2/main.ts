import { TodoInterface } from "./todoInterface";

// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    public tasks: Array<any> = []
    constructor (){}

     addTask(task: string){
        this.tasks.push(task)
        console.log(`=========== NEW TASK =========== 
                Task ${task} inserted in the list   
                Number of items: ${task.length}    
                `)
    }

    listAllTasks(){
        this.tasks.forEach = (task) =>{
            console.log(task)
        }
    }
    deleteTask(tasks){
        this.tasks.splice(tasks.indexOf(tasks), 1)
        console.log(`=========== TASK REMOVED ===========
        Task "${tasks}"
        Number of items: ${Array.length}`)

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
