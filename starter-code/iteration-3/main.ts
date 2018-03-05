// Add the reference to the interface
import {TodoItemInterface,TodoListInterface} from "./interfaces.js"


class TodoItem implements TodoItemInterface {
    title:string="";
    status:boolean=false;
    updatedAt: Date;
    constructor (){};

    toggleStatus():void {
         this.status==false ?  this.status=true : this.status=false;    
     }
    
}

// // Write the interface for class Todo. It must have:
class TodoList implements TodoListInterface {
    TodoItem:Array<TodoItemInterface>;
   
    constructor (){};

    addTask(task:TodoItem):void {
        this.TodoItem.push(task);  
     }
     // 3. Create a function to list all tasks, it must show in the console de task.
     listAllTasks():void {
        this.TodoItem.forEach(item=>{
          console.log(item);
        })
     }
     // 4. Create a function to delete a task, you must find the task inside the array and delete it.
     deleteTask (item:TodoItem):void {


        this.TodoItem.forEach(i=>{
            if(i.title==item.title){
                let ind=this.TodoItem.indexOf(i);
                this.TodoItem.splice(ind, 1)
            }

        })
       // return this.TodoItem.length;
     }

     listUncompleted():void {
        this.TodoItem.forEach(item=>{
            item.status==false? console.log(item) 
        
        })
     }
    
}

// export interface TodoListInterface {
//     TodoItem:Array<string>;
//     addTask(task:string):void;
//     listAllTasks():void;
//     deleteTask(task:string):void;
//     listUncompleted():void
// }
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
myTodos.listUncomplete();
