class Todo {
    constructor(tasks) {
        this.tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    listAllTasks() {
        this.tasks.forEach(task => {
            console.log(task);
        });
    }
    deleteTask(task) {
        const taskIndex = this.tasks.indexOf(task);
        this.tasks.splice(taskIndex, 1);
    }
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
