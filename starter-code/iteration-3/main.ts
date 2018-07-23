// Add the reference to the interface
import {TodoItemInterface} from "./interfaces"
import {TodoListInterface} from "./interfaces"

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
    status: boolean;
    title: string;
    updatedAt: Date
    // myArray: Array<string> = [];

    constructor(title: string){
        this.title = title;
        this.status = true;
    }
    
    toggleStatus(): void{
        if(this.status === true) this.status = false;
        else this.status = true;
    }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
    task: TodoItem
    myArray: Array<TodoItem>  = []

    
    addTask(task:TodoItem): number{
        this.myArray.push(task);
        console.log(task)
        console.log(this.myArray.length)
        return this.myArray.length;
    }
    listAllTasks(): void{
        this.myArray.forEach(function(element){
            console.log(element);
        })
    }
    deleteTask(task:TodoItem): number{

        for(let i=0; i<this.myArray.length; i++){
            if(this.myArray[i]== task) this.myArray.splice(i,1);
        }

        return this.myArray.length;
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
// myTodos.listUncomplete();
myTodos.listAllTasks();