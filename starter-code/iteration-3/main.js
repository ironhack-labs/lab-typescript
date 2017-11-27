class TodoItem {
    constructor(title) {
        this.title = title;
        this.toogleStatus = function () {
            if (this.status) {
                this.status = false;
            }
            else
                this.status = true;
        };
    }
}
class TodoList {
    constructor(taskArray) {
        this.taskArray = taskArray;
        this.addTask = function (task) {
            task.updateAt = new Date();
            console.log("Task :" + task.title + "inserted in the list");
            this.taskArray.push(task);
            return this.taskArray.length;
        };
        this.listAllTasks = function () {
            this.taskArray.forEach(e => {
                console.log(e.title);
                console.log(e.updateAt);
            });
        };
        this.deleteTask = function (task) {
            let index = this.taskArray.indexOf(task);
            this.taskArray.splice(index, 1);
            console.log("Task :" + task.title + "removed from the list");
            return this.taskArray.length;
        };
    }
}
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
let arr = [];
let myTodos = new TodoList(arr);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
