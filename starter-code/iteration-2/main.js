class Todo {
    constructor() {
        this.toDoArrayIteration2 = [];
    }
    addTask(task) {
        this.toDoArrayIteration2.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task " + task + " inserted in the list");
        return this.toDoArrayIteration2.length;
    }
    listAllTasks() {
        console.log("=========== LIST OF TASKS ===========");
        this.toDoArrayIteration2.forEach(function (task) {
            console.log("- ", task);
        });
    }
    deleteTask(task) {
        let taskIndex = this.toDoArrayIteration2.indexOf(task);
        this.toDoArrayIteration2.splice(taskIndex, 1);
        console.log("=========== TASK REMOVED ===========");
        console.log("Task " + task + " removed from the list");
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
