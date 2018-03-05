// Add the reference to the "TodoInterface"
import {Task} from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements Task {
    myList: Array<string>=[]

    addTask(task: string): number{
        this.myList.push(task)
        console.log(`=========== NEW TASK ===========
    Task "${task}" inserted in the list
    Number of items: ${this.myList.length}`)
        return this.myList.length
    }
    listAllTasks(): void{
        this.myList.forEach((task)=>{
            console.log(task)
        })
    }
    deleteTask(task: string): number{
        this.myList.splice(this.myList.indexOf(task), 1)
        console.log(`=========== TASK REMOVED ===========
    Task "${task}" removed from the list
    Number of items: ${this.myList.length}`)
        return this.myList.length
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
