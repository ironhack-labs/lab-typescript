class Todo {
    constructor() {
        this.taskList = [];
    }
    addTask(task) {
        this.taskList.push(task);
        return this.taskList.length;
    }
    listAllTasks() {
        this.taskList.forEach(function (e) {
            console.log(e);
        });
    }
    deleteTask(task) {
        this.taskList.splice(this.taskList.indexOf(task), 1);
        return this.taskList.length;
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
