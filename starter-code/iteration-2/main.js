class Todo {
    constructor() {
        this.myTask = [];
    }
    addTask(task) {
        this.myTask.push(task);
        console.log("Task added!");
        return this.myTask.length;
    }
    listAllTasks() {
        this.myTask.forEach(t => {
            console.log(t);
        });
    }
    deleteTask(task) {
        for (let i = 0; i < this.myTask.length; i++) {
            if (this.myTask[i] == task) {
                this.myTask.splice(i, 1);
                console.log("Task deleted!");
            }
        }
        return this.myTask.length;
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
