// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from './interfaces'
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
   status: boolean;
   updatedAt: number;
    constructor(public title: string) {
        this.updatedAt = Date.now();
        this.status = false;
    }
    
    toggleStatus() {
        this.status = !this.status
     }
  
  
 }


 class TodoList implements TodoListInterface{
    arr: Array<TodoItem> = [];

    addTask(item: TodoItem): number {
       this.arr.push(item);
        return this.arr.length
    }

    listAllTasks(){
        this.arr.forEach(item => {
            console.log(item.title)
        })
    }

    deleteTask(item: TodoItem): number {
            let index =  this.arr.indexOf(item);
             this.arr.splice(index, 1)
            // console.log("Deleted: ", task + " length is ", myArr.length)
             return this.arr.length
          
    }

 

 }
 
// Create class TodoList that implements the corresponding interface

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
myTodos.listAllTasks();

