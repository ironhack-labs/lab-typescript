class TodoItem {
    constructor(title, status = false, updatedAt = new Date()) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    toogle() {
        this.updatedAt = new Date();
        if (this.status === false) {
            this.status = true;
        }
        else
            this.status = false;
    }
    ;
}
class TodoList {
    constructor(tasks) {
        this.tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task " + task + " inserted in the list");
        console.log("Number of items:" + this.tasks.length);
        return this.tasks.length;
    }
    ;
    listAllTasks() {
        this.tasks.forEach(e => {
            console.log(e.title);
            console.log(e.updatedAt);
        });
    }
    ;
    deleteTask(task) {
        let pos = this.tasks.indexOf(task);
        this.tasks.splice(pos, 1);
        console.log("=========== TASK REMOVED ===========");
        console.log("Task " + task + " removed from the list");
        console.log("Number of items:" + this.tasks.length);
        return this.tasks.length;
    }
    ;
}
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
let myTodos = new TodoList([]);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
