class Todo {
    constructor() {
        this.tasksList = [];
    }
    addTask(task) {
        this.tasksList.push(task);
        return this.tasksList.length;
    }
    listAllTasks() {
        this.tasksList.forEach((e) => {
            console.log(e);
        });
    }
    deleteTask(task) {
        this.tasksList.splice(this.tasksList.indexOf(task), 1);
        return this.tasksList.length;
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
