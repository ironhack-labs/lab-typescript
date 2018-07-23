// Add the reference to the interface
import {TodoItemInterface} from "../iteration-3/interfaces.js"
import {TodoListInterface} from "../iteration-3/interfaces.js"
// Create class TodoItem that implements the corresponding interface
class TodoItem  implements TodoItemInterface {
    title;
    done = false;
    updatedAt = new Date();
    
    constructor(title){
        this.title = title;
    };

    toggleStatus(done:boolean):void{
        if(done){!done}
        this.updatedAt = new Date;
    };
}

// Create class TodoList that implements the corresponding interface

class TodoList  implements TodoListInterface {
    listItems:Array<TodoItemInterface>;
    
    constructor(){
        this.listItems = [];
    };

    addTask(taskToAdd:TodoItem):number{
        this.listItems.push(taskToAdd);
        console.log(`
        =========== NEW TASK ===========
        Task "${taskToAdd}" inserted in the list
        Number of items: ${this.listItems.length}`);
        return this.listItems.length;
    }

    listAllTasks():void{
        this.listItems.forEach(task => {
            console.log(task);
        });
    }

    deleteTask(taskToDelete:TodoItem):number{
        this.listItems.forEach((task) => {
            if(task.title===taskToDelete.title){
                this.listItems.splice(this.listItems.indexOf(task),1)
                console.log(`
                =========== TASK REMOVED ===========
                Task "${taskToDelete}" removed from the list
                Number of items: ${this.listItems.length}`)
            }
        });
    
        return this.listItems.length;
    }d

}


// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("iteration 3 =======================>")
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
