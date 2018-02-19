// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from "./interfaces"


// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    title: string = "";
    stats: boolean = false;
    updatedAt: Date;
    constructor(title: string = "New task") {
        this.title = title;
        this.updatedAt = new Date();
    }
    toggleStats() { }

}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    array: Array<TodoItem> = [];
    addTask(task: TodoItem) {
        this.array.push(task)
        console.log("=========== NEW TASK ===========")
        console.log(`Task "${task.title}" inserted in the list`)
        return this.array.length;
    }
    listAllTasks() {
        console.log("This ARE ALL THE TASKS IN THE ARRAY")
        this.array.forEach(e => {
            console.log(`- ${e.title} updated at : ${e.updatedAt}`)
        })
    }
    deleteTask(task: TodoItem) {
        let index = this.array.indexOf(task)
        this.array.splice(index, 1);
        console.log("=========== TASK REMOVED ===========")
        console.log(`Task ${task.title} removed from the list`)
        return this.array.length;
    }

    listUncomplete() {
        console.log("TASKS LEFT:")
        this.array.forEach(e => {
            console.log(e.title)
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
