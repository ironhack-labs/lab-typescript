// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from './interfaces';


// Create class TodoItem that implements the corresponding interface


class TodoItem implements TodoItemInterface{

    deleteTaskItem: Array<TodoItemInterface> = [];

    constructor(public title: string, public status: boolean, public updatedAt: Date){  }

    toggle(){
        
    }
    
}
class TodoList implements TodoListInterface{

    constructor(public arrayList: Array<TodoItemInterface>){}
    
    addTask(task: TodoItem):number {
        // this.task = task;        
        this.arrayList.push(task);
        console.log(`=========== NEW TASK =========== 
        Task "` + task.title + `" inserted in the list `);
        console.log("Number of items: " + this.arrayList.length);

        return this.arrayList.length;
    }

    listTask():void{
        this.arrayList.forEach(function(element){ 
            console.log(element.title, element.updatedAt) 
        })  
    }
    
    deleteTask(task: TodoItem):number {
        var that = this;
        this.arrayList.forEach(function(element,index){ 
            
            if (element === task){
                that.arrayList.splice(index,1);
                console.log(`=========== NEW REMOVED =========== 
                Task "` + task.title + `" removed in the list `);
                console.log("Number of items: " + that.arrayList.length);
            }
        })  
        
        return this.arrayList.length;
    }

}

// Create class TodoList that implements the corresponding interface

// Execution



let task1 = new TodoItem('This is our first task', true, new Date());
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!', true, new Date());
let task3 = new TodoItem('Finish this iteration 1!! 🤓', true, new Date());
let task4 = new TodoItem('Finish this iteration 2!! 🤓', true, new Date());
let task5 = new TodoItem('Finish this iteration 3!! 🤓', true, new Date());

let myTodos = new TodoList([]);

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listTask();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
