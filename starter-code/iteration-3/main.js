class TodoItem {
    constructor(title) {
        this.title = title;
        this.done = false;
        this.updatedAt = new Date();
    }
    toggleDone() {
        this.done = !this.done;
    }
}
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        console.log(`=========== NEW TASK ===========
    Task ${task.title} inserted in the list
    at ${task.updatedAt}
    Number of items: ${this.tasks.length}`);
    }
    deleteTask(task) {
        if (this.tasks.indexOf(task) > -1) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
            console.log(`=========== TASK REMOVED ===========
      Task ${task.title} removed from the list
      at ${task.updatedAt}
      Number of items: ${this.tasks.length}`);
        }
        else {
            console.log(`=========== TASK NOT FOUND ===========
      Number of items: ${this.tasks.length}`);
        }
    }
    listAllTasks() {
        console.log(`=========== ALL TASKS ===========`);
        this.tasks.map((el, idx) => console.log(`${idx + 1} ${el.title} done: ${el.done}`));
    }
    listUncomplete() {
        console.log(`=========== UNCOMPLETE TASKS ===========`);
        let i = 1;
        this.tasks.filter(el => el.done === false).map(el => {
            console.log(`${i} ${el.title}`);
            i++;
        });
    }
}
let task1 = new TodoItem("This is our first task");
let task2 = new TodoItem("Eat pizza 🍕 yummy!!!");
let task3 = new TodoItem("Finish this iteration 1!! 🤓");
let task4 = new TodoItem("Finish this iteration 2!! 🤓");
let task5 = new TodoItem("Finish this iteration 3!! 🤓");
let myTodos = new TodoList();
console.log(myTodos.addTask(task1));
console.log(myTodos.addTask(task2));
console.log(myTodos.addTask(task3));
console.log(myTodos.addTask(task4));
console.log(myTodos.addTask(task5));
myTodos.listAllTasks();
task1.toggleDone();
console.log(myTodos.deleteTask(task3));
console.log(myTodos.deleteTask(task4));
console.log(myTodos.deleteTask(task5));
myTodos.listUncomplete();
