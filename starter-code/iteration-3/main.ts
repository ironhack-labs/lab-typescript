// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from './interfaces'

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    title: String;
    status: Boolean;
    updatedAt: Date;
    constructor (title){
        this.title = title;
        this.updatedAt = new Date();
    }
    toggleStatus(){
        this.status = !this.status;
        this.updatedAt = new Date();
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    arr: Array<TodoItem>=[];
    constructor(){}
        addTask(task:TodoItem): number{
        this.arr.push(task);
        console.log(`Task ${TodoItem} inserted in the list`)
        return this.arr.length
    }
        listAllTask(): void{
            for(var i=0;i<this.arr.length;i++){
            console.log(this.arr[i])
        }
    }
        deleteTask (task: TodoItem): number{
        this.arr.splice(this.arr.indexOf(task),1)
        return this.arr.length
        console.log(`Task ${task} removed from the list and number of items ${this.arr.length}`)
        
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
myTodos.listAllTask();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
//myTodos.listUncomplete();
