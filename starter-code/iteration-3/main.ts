// Add the reference to the interface
import {list, item} from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements item{
    constructor(public task: string){
        task = this.task;
    }
    updatedAt = Date["toDateString"];
    done = false;
    toggleDone(){
        if(this.done === false){
            this.done = true;
        }else{
            this.done = false;
        }
        this.updatedAt = Date["toDateString"];
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements list{
    listItems = [];
    addTask(item: any){
        this.listItems.push(item);
        return this.listItems.length;
    }
    listAllTasks(){
        this.listItems.forEach((e, i) => {
            console.log(`Item ${i} is ${e.task}`)
        })
    }
    deleteTask(item: any){
        const index = this.listItems.indexOf(item);
        console.log(`Number of items before deletion: ${this.listItems.length}`)
        this.listItems.splice(index, 1);
        return this.listItems.length;
    }
    listUncomplete(){
        this.listItems.forEach(e => {
            if(e.done === false){
                console.log(`${e.task} is not done`)
            }
        })
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
myTodos.listUncomplete();