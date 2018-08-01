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
console.log(myTodos.addTask('This is our first task'));
console.log(myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log(myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log(myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log(myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log(myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log(myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
