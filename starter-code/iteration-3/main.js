// Create class TodoItem that implements the corresponding interface
class TodoItem {
    constructor(title) {
        this.status = false;
        this.title = title;
        this.updatedAt = Date.now();
    }
    toggleStatus(status) {
        if (status) {
            status = false;
        }
        else {
            status = true;
        }
        return status;
    }
    ;
}
// Create class TodoList that implements the corresponding interface
class TodoList {
    constructor() {
        this.list = [];
        // listUncomplete(){
        // };
    }
    addTask(task) {
        this.list.push(task);
        return this.list.length;
    }
    ;
    listAllTasks() {
        this.list.forEach(element => {
            console.log(element.title, element.updatedAt);
        });
    }
    ;
    deleteTask(task) {
        this.list.splice(this.list.findIndex(element => {
            return element === task;
        }), 1);
        return this.list.length;
    }
    ;
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
// myTodos.listUncomplete();
