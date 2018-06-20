// Adds the references to the interfaces.
import { TodoItemInterface, TodoListInterface } from './interfaces';

// Create a class TodoItem that implements the corresponding interface.
class TodoItem implements TodoItemInterface {

    status: boolean;
    updatedAt: Date;

    constructor(public title: string) {
       this.updatedAt = Date.now();
       this.status = false;
    }
  
    toggleStatus():void{
        this.status = !this.status;
        this.updatedAt = Date.now();
    }
} 
// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {

    TodoItems : Array<TodoItem> = [];

    addTask(theItem: TodoItem):number{
        console.log(theItem.title);
        this.TodoItems.push(theItem); // Adds to the array.
        console.log("=========== NEW TASK ===========");
        console.log("Task: ", theItem);
        return this.TodoItems.length;
    }

    listAllTasks(){
        this.TodoItems.forEach(task => {
         console.log(task.title);
        }); 
     }

    deleteTask(theItem: TodoItem):number{
        let theIndex = this.TodoItems.indexOf(theItem)
        console.log("=========== REMOVED TASK ===========");
        for (let i = 0; i < this.TodoItems.length; i++) {
            if(this.TodoItems[i] === theItem){
                this.TodoItems.splice(i,1);
            };   
        };
        console.log("Task: ", theItem);
        return this.TodoItems.length;2
    }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

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
myTodos.listUncomplete();
