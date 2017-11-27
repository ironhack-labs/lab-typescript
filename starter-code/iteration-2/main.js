class Todo {
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
            console.log(e);
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
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
