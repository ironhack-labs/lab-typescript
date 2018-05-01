// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from "./interfaces";


// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
    

    constructor (
        public title: string,
        status: boolean;
        updatedAt: Date;

    ){}

    toggleStatus(){
        if status: 
    }
}


// Create class TodoList that implements the corresponding interface
class TodoItem implements TodoItemInterface{
    tasks: Array<string>
    // constructor(
    //     public tasks: Array<string>
    // ){};

    addTask (task: string){
        this.tasks.push(task);
        console.log(`${task} added to this.tasks array`);
        console.log(this.tasks.length);
        return this.tasks.length;
    };

    listAllTasks(){
        this.tasks.map((one) => {
            console.log(one);
        })
    };

    deleteTask(task){
        let index = this.tasks.findIndex(task);
        this.tasks.splice(index, 1);
        console.log(`${task} has been removed from the list`);
        console.log(this.tasks.length);
        return this.tasks.length;
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
