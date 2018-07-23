class TodoItem {
    constructor(title, done) {
        this.title = title;
        this.done = done;
    }
    ;
    toggle(task) { }
    ;
}
;
class TodoList {
    constructor() {
        this.taskArrayTwo = [];
    }
    addTask(task) {
        this.taskArrayTwo.push(task);
        return this.taskArrayTwo.length;
    }
    ;
    listAllTasks() {
        this.taskArrayTwo.forEach(function (eachTask) {
            console.log(eachTask);
        });
    }
    ;
    deleteTask(task) {
        const theIndex = this.taskArrayTwo.indexOf(task);
        this.taskArrayTwo.splice(theIndex, 1);
        return this.taskArrayTwo.length;
    }
    ;
    listUncomplete() {
        console.log(this.taskArrayTwo);
        this.taskArrayTwo.forEach(task => {
            if (task.done == false) {
                console.log(`${task.title} is not complete.`);
            }
        });
    }
    ;
}
;
let task1 = new TodoItem('This is our first task', false);
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false);
let task3 = new TodoItem('Finish this iteration 1!! 🤓', false);
let task4 = new TodoItem('Finish this iteration 2!! 🤓', false);
let task5 = new TodoItem('Finish this iteration 3!! 🤓', false);
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
