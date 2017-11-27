class TodoItem {
    constructor(title) {
        this.title = title;
        this.updatedAt = new Date();
    }
    toggleStatus() {
        status ? false : true;
        this.updatedAt = new Date();
    }
    ;
}
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(todoItem) {
        this.tasks.push(todoItem);
        return this.tasks.length;
    }
    listAllTasks() {
        this.tasks.forEach(e => {
            console.log(`${e.title} & ${e.updatedAt}`);
        });
    }
    deleteTask(todoItem) {
        this.tasks.forEach((e, i) => {
            if (e.title === todoItem.title)
                this.tasks.splice(i, 1);
        });
        console.log(`Task ${todoItem.title} removed from the list. Number of items: ${this.tasks.length}`);
        return this.tasks.length;
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
