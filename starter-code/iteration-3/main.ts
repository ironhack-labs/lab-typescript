// Add the reference to the interface
import { TodoInterface, TodoItemInterface } from "./interfaces";


// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    constructor(public title: string, public done: boolean = false, public updatedAt: Date = new Date()) { }
    toggleStatus(): void {
        if (this.done) {
            this.done = false;
        } else {
            this.done = true;
        }
        this.updatedAt = new Date();
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface {
    list: TodoItem[] = [];

    addTask(task: TodoItem): number {
        this.list.push(task);
        console.log(`=========== NEW TASK ===========\nTask "${task.title}" inserted in the list`);
        return this.list.length;
    }
    listAllTasks(): void {
        this.list.forEach(element => {
            console.log(element);
        })
    }
    deleteTask(task: TodoItem): number {
        let index = this.list.findIndex(savedTask => {
            return savedTask.title === task.title
        });
        this.list.splice(index, 1);
        console.log(`=========== TASK REMOVED ===========\nTask "${task}" removed from the list`);
        return this.list.length;
    }
    listUncomplete(): void {
        let uncomplete = this.list.reduce((acc, elem) =>{
            if (!elem.done) { 
                acc.push(elem);
            }
            return acc;
        }, []);
        uncomplete.forEach(element => {
            console.log(element);
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
console.log(myTodos);
myTodos.listAllTasks();
myTodos.list[0].toggleStatus();
myTodos.listUncomplete();
