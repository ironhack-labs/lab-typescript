class TodoItem {
    constructor(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    toggleStatus() {
        this.status = !this.status;
    }
}
class TodoList {
    constructor() {
        this.array = [];
    }
    addTask(task) {
        this.array.push(task);
        console.log("Added task");
        console.log(this.array.length);
        return this.array.length;
    }
    listAllTasks() {
        this.array.forEach(e => {
            console.log(e.title, e.updatedAt, e.status);
        });
    }
    deleteTask(task) {
        this.array.forEach((e, i) => {
            if (task === e) {
                this.array.splice(i, 1);
                console.log(`Deleted item ${task}`);
            }
        });
        console.log(this.array.length);
        return this.array.length;
    }
}
let task1 = new TodoItem("This is our first task");
let task2 = new TodoItem("Eat pizza 🍕 yummy!!!");
let task3 = new TodoItem("Finish this iteration 1!! 🤓");
let task4 = new TodoItem("Finish this iteration 2!! 🤓");
let task5 = new TodoItem("Finish this iteration 3!! 🤓");
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
