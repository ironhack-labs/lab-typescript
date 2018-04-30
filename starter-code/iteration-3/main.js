class TodoItem {
    constructor(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    toogleStatus() {
        if (this.status === true) {
            this.status = false;
        }
        else {
            this.status = true;
        }
    }
}
class TodoList {
    constructor() { this.TodoItem = []; }
    ;
    addTask(task) {
        this.TodoItem.push(task);
        console.log(`Add task ${task} inserted in the list`);
        return (this.TodoItem.length);
    }
    listAllTasks() {
        this.TodoItem.forEach(e => {
            console.log(e.title);
        });
    }
    deleteTask(task) {
        this.TodoItem.splice(this.TodoItem.indexOf(task), 1);
        console.log(`Deleted task ${task} inserted in the list`);
        return (this.TodoItem.length);
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
