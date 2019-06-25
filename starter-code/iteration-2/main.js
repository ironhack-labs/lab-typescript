class Todo {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        console.log(`=========== NEW TASK ===========
    Task ${task} inserted in the list
    Number of items: ${this.tasks.length}`);
    }
    deleteTask(task) {
        if (this.tasks.indexOf(task) > -1) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
            console.log(`=========== TASK REMOVED ===========
      Task ${task} removed from the list
      Number of items: ${this.tasks.length}`);
        }
        else {
            console.log(`=========== TASK NOT FOUND ===========
      Number of items: ${this.tasks.length}`);
        }
    }
    listAllTasks() {
        this.tasks.map((el, idx) => console.log(`${idx + 1} ${el}`));
    }
    ;
}
let myTodos = new Todo();
console.log(myTodos.addTask("This is our first task"));
console.log(myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log(myTodos.addTask("Finish this iteration 1!! 🤓"));
console.log(myTodos.addTask("Finish this iteration 2!! 🤓"));
console.log(myTodos.addTask("Finish this iteration 3!! 🤓"));
myTodos.listAllTasks();
console.log(myTodos.deleteTask("Finish this iteration 1!! 🤓"));
console.log(myTodos.deleteTask("Finish this iteration 2!! 🤓"));
myTodos.listAllTasks();
