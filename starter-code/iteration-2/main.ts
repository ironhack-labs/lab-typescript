// Add the reference to the "TodoInterface"
import { List } from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements List {
    myArrayList: Array<string> = []
    addTask(task: string): number {
        this.myArrayList.push(task)
        console.log(`Task ${task} inserted in the list`)
        console.log(this.myArrayList.length)
        return this.myArrayList.length

    }
    listAllTasks():void{
        this.myArrayList.forEach(task=>{
            console.log(task)
        })
    }
     deleteTask(task:string):number{
        this.myArrayList.splice(this.myArrayList.indexOf(task),1)
        console.log(`Task ${task} removed from the list`)
        console.log(this.myArrayList.length)
        return this.myArrayList.length
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
