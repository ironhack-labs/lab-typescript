class Todo {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        console.log(`=========== NEW TASK ===========
    Task ${task} inserted in the list
    Number of items: ${this.tasks.length}`);
        return this.tasks.length;
    }
    listAllTasks() {
        this.tasks.forEach(e => {
            console.log(`TASK: ${e}`);
        });
    }
    deleteTask(task) {
        let removedTask = this.tasks.splice(this.tasks.indexOf(task), 1);
        console.log(`=========== TASK REMOVED ===========
    Task ${removedTask} removed from the list
    Number of items: ${this.tasks.length}`);
        return this.tasks.length;
    }
}
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 3!! 🤓"));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 2!! 🤓"));
myTodos.listAllTasks();
