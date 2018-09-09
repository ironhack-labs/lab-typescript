// Add the reference to the interface
import * as InterfacesToDo from './interfaces'
//import {TodoListInterface, TodoItemInterface} from './interfaces'

// Create class TodoItem that implements the corresponding interface
class TodoItem implements InterfacesToDo.TodoItemInterface {
    constructor(
        public title:string, 
        public status:boolean = false, 
        public updatedAt:Date = new Date()
        ){}
    toggleStatus(task:InterfacesToDo.TodoItemInterface):void{
        task.status = !this.status;
        console.log(`Task "${task.title} is complete"`);
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements InterfacesToDo.TodoListInterface {
    constructor(
        public arrayTasks:Array<InterfacesToDo.TodoItemInterface> = [], 
        public uncompletedTasks:Array<InterfacesToDo.TodoItemInterface> = []
        ){}
    
    addTask(task:InterfacesToDo.TodoItemInterface):number{
        console.log(`=========== NEW TASK ===========`);
        this.arrayTasks.push(task);
        console.log(`Insertion done!!!!`);
        return this.arrayTasks.length
    }
    
    listAllTasks():void{        
        this.arrayTasks.forEach((task)=>{
            console.log(task.title);
        })
    }
    deleteTask(task:InterfacesToDo.TodoItemInterface):number{
        console.log(`=========== DELETE TASK ===========`);
        this.arrayTasks.splice(this.arrayTasks.indexOf(task), 1);
        console.log(`Deletion done!!!!`);
        return this.arrayTasks.length
    }
    listUncomplete():Array<InterfacesToDo.TodoItemInterface>{        
        return this.uncompletedTasks = this.arrayTasks.filter((task)=>{
            return task.status !== true;
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
