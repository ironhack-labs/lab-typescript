class TodoItem {
    constructor(taskTitle) {
        this.title = taskTitle;
        this.updatedAt = new Date;
        this.status = false;
    }
    toggleStatus() {
        if (this.status) {
            this.status = false;
        }
        else {
            this.status = true;
        }
    }
}
class TodoList {
    constructor() {
        this.toDoItemsArray = [];
    }
    addTask(task) {
        this.toDoItemsArray.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task " + task.title + " inserted in the list");
        return this.toDoItemsArray.length;
    }
    listAllTasks() {
        console.log("=========== LIST OF TASKS ===========");
        this.toDoItemsArray.forEach(function (task) {
            console.log("- ", task.title);
        });
    }
    deleteTask(task) {
        let taskIndex = this.toDoItemsArray.indexOf(task);
        console.log(taskIndex);
        this.toDoItemsArray.splice(taskIndex, 1);
        console.log("=========== TASK REMOVED ===========");
        console.log("Task " + task.title + " removed from the list");
        return this.toDoItemsArray.length;
    }
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
