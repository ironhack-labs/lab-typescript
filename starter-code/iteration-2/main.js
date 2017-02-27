class Todo {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    listAllTasks() {
        for (let item of this.tasks) {
            console.log(item);
        }
    }
    deleteTask(item) {
        let index = this.tasks.indexOf(item);
        this.tasks.splice(index, 1);
    }
}
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza :pizza:  yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! :nerd_face:'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! :nerd_face:'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! :nerd_face:'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! :nerd_face:'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! :nerd_face:'));
myTodos.listAllTasks();
