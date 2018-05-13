class TodoItem {
    constructor(title) {
        this.title = title;
        this.updatedAt = Date.now();
        this.status = false;
    }
    toggleStatus() {
        if (this.status === false) {
            this.status = true;
        }
        else {
            this.status = false;
        }
        this.updatedAt = Date.now();
    }
}
class TodoList {
    constructor() {
        this.ToDoItems = [];
    }
    addTask(TodoItem) {
        console.log(TodoItem.title);
        let outputString = "=========== NEW TASK ===========\n";
        this.ToDoItems.push(TodoItem);
        outputString += `"Task "${TodoItem.title}" inserted in the list"\n`;
        outputString += `Number of items: ${this.ToDoItems.length}`;
        console.log(outputString);
        return this.ToDoItems.length;
    }
    ;
    listAllTasks() {
        console.log("=========== ALL TASKS ===========");
        this.ToDoItems.forEach((task) => { console.log(task.title); });
    }
    ;
    deleteTask(TodoItem) {
        let numberOfTasks;
        let outputString = "=========== TASK REMOVED ===========\n";
        this.ToDoItems.splice(this.ToDoItems.indexOf(TodoItem), 1);
        outputString += `Task "${TodoItem.title}" removed from the list\n`;
        outputString += `Number of items: ${this.ToDoItems.length}`;
        console.log(outputString);
        return this.ToDoItems.length;
    }
    ;
    listUncomplete() {
        console.log("=========== INCOMPLETE TASKS ===========");
        this.ToDoItems.forEach((task) => {
            if (task.status === false) {
                console.log(task.title);
            }
        });
    }
    ;
}
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
