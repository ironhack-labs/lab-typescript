// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from "./interfaces"

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    constructor (public title:string, public status:boolean=true, public updatedAt:Date=new Date()) {}
    //Algunos de los parámetros que va a recibir la clase los ponemos por defecto de forma que no son obligatorios cuando creemos instancias de esta clase
    
    toggleStatus() {
        if (this.status === true) {
            this.updatedAt= new Date();
            return this.status = false
        } else if (this.status === false) {
            this.updatedAt= new Date();
            return this.status = true;
        }


    }
}


// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
    constructor (public tasks: Array<TodoItem>) {}

   addTask(task:TodoItem):number {
    this.tasks.push(task);
    console.log(`Task ${task.title} inserted in the list`);
    return this.tasks.length;
    }

    listAllTasks ():void {
    this.tasks.forEach((task)=> {
        console.log(task);
        })
    }


    deleteTask(task:TodoItem):number {
    let index= this.tasks.indexOf(task);
    this.tasks.splice(index,1);
    console.log(`Task ${task.title} removed in the list`);
    return this.tasks.length;
    }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

task1.toggleStatus();
console.log(task1.status);

let myTodos = new TodoList([]);

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();

