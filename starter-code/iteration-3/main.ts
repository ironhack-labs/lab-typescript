// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    constructor(public title:string, public status:boolean = false, public updatedAt:Date = new Date()){}
    toggleStatus(task:TodoItemInterface):void{
        task.status = !this.status;
        console.log(`Task "${task.title} is finished"`);
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    constructor(public listItems:Array<TodoItemInterface>, public uncompletedTasks:Array<TodoItemInterface>){}
    
    addTask(task:TodoItemInterface):number{
        this.listItems.push(task);  
        return this.listItems.length; 
    }
    
    listAllTasks(tasks:Array<TodoItemInterface>):void{        
        tasks.forEach((element)=>{
            console.log(element.title);
        })
    }
    deleteTask(task:TodoItemInterface):number{
        this.listItems.splice(this.listItems.indexOf(task), 1);
        return this.listItems.length;
    }
    listUncomplete(tasks:Array<TodoItemInterface>):Array<TodoItemInterface>{        
        return this.uncompletedTasks = tasks.filter((elem)=>{
            return elem.status !== true;
        })
    }
}
// Execution
let task1 = new TodoItem('first task');
let task2 = new TodoItem('second task');
let task3 = new TodoItem('third task');
let task4 = new TodoItem('fourth task');
let task5 = new TodoItem('fifth task');

let myTodos = new TodoList([], []);

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));

console.log('----');
myTodos.listAllTasks(myTodos.listItems);
console.log('----');
console.log(`Deleted item "${task1.title}", Number of items:`, myTodos.deleteTask(task1));
console.log('----');
myTodos.listAllTasks(myTodos.listItems);
console.log('----');
task2.toggleStatus(task2);
task3.toggleStatus(task3);
console.log('----');
console.log("Uncompleted tasks:", myTodos.listUncomplete(myTodos.listItems));
// console.log(myTodos.listItems);
