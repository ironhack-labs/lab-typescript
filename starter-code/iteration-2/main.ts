// Add the reference to the "TodoInterface"
import {TodoInterface} from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    myArray: Array<string>=[]

    addTask(task: string): number{
        this.myArray.push(task)
        console.log(`elemento ${task} añadido`);
        console.log(this.myArray.length)
        return this.myArray.length
    }
    listAllTasks(): void{
        this.myArray.forEach((task)=>{
            console.log(task)
        })
    }
    deleteTask(task: string): number{
        this.myArray.splice(this.myArray.indexOf(task), 1)
        console.log(`elemento ${task} añadido`);
        console.log(this.myArray.length)
        return this.myArray.length
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
