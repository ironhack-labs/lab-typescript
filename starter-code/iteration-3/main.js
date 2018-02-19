class TodoItem {
    constructor(title) {
        this.title = title;
        this.status = 'finished';
    }
    toggleStatus() {
        if (this.status == 'finished') {
            this.status = 'unfinished';
        }
        else {
            this.status = 'finished';
        }
        this.updatedAt = new Date(Date.now());
    }
}
class TodoList {
    constructor() {
        this.task = [];
    }
    addTask(task) {
        this.task.push(task);
        let numElements = this.task.length;
        console.log("=========== TASK REMOVED ===========");
        console.log(`Task  ${task} removed from the list`);
        console.log(`Number of items: ${numElements}`);
        return numElements;
    }
    listAllTasks() {
        this.task.forEach(x => console.log(x.title + x.updatedAt));
    }
    deleteTask(task) {
        let taskAux = this.task.map(x => x.title).indexOf(task.title);
        this.task.slice(taskAux, 1);
        let numElements = this.task.length;
        console.log("=========== TASK REMOVED ===========");
        console.log(`Task  ${task} removed from the list`);
        console.log(`Number of items: ${numElements}`);
        return numElements;
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
