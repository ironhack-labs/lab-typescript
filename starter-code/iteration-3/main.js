class TodoItem {
    constructor(title) {
        this.title = title;
        this.updatedAt = new Date();
        this.status = true;
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
        this.todoList = [];
    }
    addTask(item) {
        this.todoList.push(item);
        return this.todoList.length;
    }
    ;
    listAllTasks() {
        for (var i = 0; i < this.todoList.length; i++) {
            console.log(this.todoList[i]);
        }
    }
    deleteTask(item) {
        this.todoList.splice(this.todoList.indexOf(item), 1);
        console.log("Item deleted!");
        return this.todoList.length;
    }
    listUncomplete() {
        for (var i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].status) {
                console.log('still todo:', this.todoList[i]);
            }
        }
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
myTodos.listUncomplete();
