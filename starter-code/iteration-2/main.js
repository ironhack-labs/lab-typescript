class Todo {
    constructor() {
        this.array = [];
    }
    addTask(task) {
        console.log("=========== NEW TASK ===========");
        console.log(`Task "${task}" inserted in the list`);
        this.array.push(task);
        return this.array.length;
    }
    listAllTasks() {
        this.array.forEach(element => {
            console.log(element);
        });
    }
    deleteTask(task) {
        this.array.splice(task, 1);
        console.log("=========== TASK REMOVED ===========");
        console.log(`Task ${task} removed from the list`);
        return this.array.length;
    }
}
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
