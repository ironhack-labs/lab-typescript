class Todo {
    constructor() {
        this.allTasks = [];
    }
    addTask(task) {
        this.allTasks.push(task);
        console.log(`Task ${task} inserted in the list`);
        console.log(`Number of items: ${this.allTasks.length}`);
        return this.allTasks.length;
    }
    listAllTasks() {
        this.allTasks.forEach(t => {
            console.log(t);
        });
    }
    deleteTask(task) {
        this.allTasks.splice(this.allTasks.indexOf(task), 1);
        console.log("Task " + task + " removed from the list");
        console.log("Number of items: " + this.allTasks.length);
        return this.allTasks.length;
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
