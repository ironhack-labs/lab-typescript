// Add the reference to the "TodoInterface"
import {Todointerface} from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements Todointerface {
    tasks = []
    constructor() {}
    addTask(task):number {
        this.tasks.push(task)
        console.log('Inserted new'+ task)  
        return this.tasks.length
        }
    listAllTasks():void {
        this.tasks.forEach((e) => {
            console.log(e)
        })}
    deleteTask(task):number {
        let indexVar = this.tasks.indexOf(task)
        this.tasks.splice(indexVar, 1)
        console.log(indexVar)
        return this.tasks.length
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
