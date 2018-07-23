
// Add the reference to the interface
import {ITodoItem} from "./interfaces"
import {I2ToDo} from "./interfaces"
// Create class TodoItem that implements the corresponding interface
class TodoItem implements ITodoItem {
    updatedAt: Date;
    isDone: boolean;
    constructor(public title: string){}
    toggleDone():void{
        this.isDone=!this.isDone
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements I2ToDo {
    constructor(public ArrayTodoItem:TodoItem[]=[]){

    }
    addTask(newtask: TodoItem):any{
        this.ArrayTodoItem.push(newtask); 
        return this.ArrayTodoItem.length;
        }
    listAllTasks():any{
        this.ArrayTodoItem.forEach(eachTask => {
            console.log(eachTask.title)
        });
    }
    deleteTask(newtask: TodoItem):any{
        this.ArrayTodoItem.splice(this.ArrayTodoItem.indexOf(newtask), 1)   
        return this.ArrayTodoItem.length;
    }
    listUncomplete():any{
        this.ArrayTodoItem.forEach(thingy => {
         console.log(thingy.title)
            })
        };
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
