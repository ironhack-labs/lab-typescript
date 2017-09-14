// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.
interface todoItemInterface {
    title : string,
    status : boolean,
    updatedAt : Date,
    statusToogle() : boolean
}
// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
interface todoInterface {
    taskArray: Array<todoItemInterface>,
    addTask(task : todoItemInterface ): number,
    listAllTasks(): void,
    deleteTask(task : todoItemInterface) : number,
    listUncomplete() : void
}

// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface
class TodoItem implements todoItemInterface {
    status: boolean = false;
    updatedAt : Date = new Date;

    constructor(public title : string) { }

    statusToogle() : boolean{
        
        if(this.status === false){
            this.status = true;
        }
        if (this.status === true) {
            this.status = false;
        }
        this.updatedAt = new Date;
        return this.status;
    }

}
// Create class TodoList that implements the corresponding interface
class TodoList implements todoInterface {
    taskArray: Array<todoItemInterface> = [];

    constructor() { }

    addTask(todoItem) : number {
        this.taskArray.push(todoItem);
        return this.taskArray.length;
    };

    listAllTasks() : void {
        for (let task of this.taskArray) {
            console.log(task);
        }
    }
    deleteTask(task) : number {
        let indexTask = this.taskArray.indexOf(task)
        this.taskArray.splice(indexTask, 1);
        return this.taskArray.length
    }
    listUncomplete() : void {
        for (let task of this.taskArray) {
            console.log(task);
        }
    
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
