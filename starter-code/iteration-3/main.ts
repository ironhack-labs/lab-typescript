// Add the reference to the interface

interface TodoItemInterface {
    title: string,
    status: boolean,
    updatedAt: Date,

    // toggleStatus: Function
}

interface TodoListInterface {
    TodoItemArray: string[]
    addTask(TodoItem: any)
    listOfAllTasks()
    deleteTask(TodoItem: any)
}
// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
    constructor ( public title: string, public status: boolean, public updatedAt: Date ) { }
    
    toggleStatus() {
        if (this.status === true) {
            console.log("finished")
            this.status = false
            this.updatedAt = new Date()
        } else {
            console.log("unfinished")
            this.status = true;
            this.updatedAt = new Date()
        }

    }
}



// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface, TodoItemInterface {
    constructor (   public TodoItemArray: string[], 
                    public TodoItem: any,
                    public title: string, 
                    public status: boolean, 
                    public updatedAt: Date
                ) { }

toggleStatus() {
        if (this.status === true) {
            console.log("finished")
            this.status = false
            this.updatedAt = new Date()
        } else {
            console.log("unfinished")
            this.status = true;
            this.updatedAt = new Date()
        }


addTask() {
    this.TodoItemArray.push(this.TodoItem);
    console.log(`Task  ${this.TodoItem} +  inserted in the list`)
    console.log(`Number of items: ${this.TodoItemArray.length}` )
    return this.TodoItemArray.length;
}

listOfAllTasks() {
    this.TodoItemArray.forEach( function (oneTask) {
        console.log(`all tasks:  + ${oneTask}`)
    })   
}

deleteTask() {
    if (this.TodoItemArray.indexOf(this.TodoItem) !== -1) {
    this.TodoItemArray.splice(arrayOfStrings.indexOf(this.TodoItem), 1);
    console.log(`Task  ${this.TodoItem} +  deleted from the list`)
    console.log(`Number of items: ${this.TodoItemArray.length}` )
    return this.TodoItemArray.length;
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
