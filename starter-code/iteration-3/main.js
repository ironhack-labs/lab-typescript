class TodoItem {
    constructor(title) {
        this.title = title;
        this.updatedAt = new Date();
        this.status = false;
    }
    toggleStatus() {
        this.status = !this.status;
        this.updatedAt = new Date();
    }
}
class TodoList {
    constructor(tasks) {
        this.tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    listAllTasks() {
        this.tasks.forEach(task => {
            console.log(task);
        });
    }
    deleteTask(task) {
        const taskIndex = this.tasks.indexOf(task);
        this.tasks.splice(taskIndex, 1);
    }
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
console.log(myTodos);
