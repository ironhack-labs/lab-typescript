// Add the reference to the interface
import {iTodo,iTodoItem} from "./interfaces"
// Create class TodoItem that implements the corresponding interface
class TodoItem implements iTodoItem{
    title:string
    status:boolean
    updatedAt:Date
    constructor(title){
        this.title = title
        this.updatedAt = new Date()
    }
    toogle():void{
        this.status = !this.status
        this.updatedAt = new Date()
    }

}
// Create class TodoList that implements the corresponding interface
class TodoList implements iTodo{
    tasks:Array<TodoItem> = []
    addTask(task:TodoItem):number{
        this.tasks.push(task)
        console.log(task)
        return this.tasks.length
    }
    listAllTasks():void{
        this.tasks.forEach(task=>{
            console.log(task.title)
            console.log(task.updatedAt)
        })
    }
    deleteTask(task:TodoItem):number{
        this.tasks.splice(this.tasks.indexOf(task),1)
        console.log(task)
        return this.tasks.length
        
    }
    listUncomplete():void{
        this.tasks.forEach(task=>{
          if(!task.status) console.log(task.title)  
        })
    }
}
// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
