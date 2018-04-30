class TodoItem {
    constructor(task) {
        this.task = task;
    }
    isToggle() {
        if (this.isDone = false) {
            this.isDone = false;
        }
        else {
            this.isDone = true;
        }
    }
}
class TodoList {
    constructor() {
        this.todoItems = [];
    }
    addTask(task) {
        this.todoItems.push(task);
        console.log(task.task);
        return this.todoItems.length;
    }
    ;
    listAllTasks() {
        this.todoItems.forEach(function (item) {
            console.log(item.task);
        });
    }
    ;
    deleteTask(task) {
        let deleteTaskIndex = this.todoItems.indexOf(task);
        if (deleteTaskIndex !== -1) {
            this.todoItems.splice(deleteTaskIndex, 1);
            console.log(task.task);
        }
        return this.todoItems.length;
    }
    ;
    listUncomplete() {
        this.todoItems.forEach(function (item) {
            if (!item.isDone)
                console.log(item.task);
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
