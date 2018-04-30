class Todo {
    constructor() {
        this.tasksArr = [];
    }
    addTask(task) {
        this.tasksArr.push(task);
        console.log(`Task ${task} inserted in the list
      Number of items: ${this.tasksArr.length}`);
        return this.tasksArr.length;
    }
    listAllTasks() {
        this.tasksArr.forEach(function (e) {
            console.log(e);
        });
    }
    deleteTask(task) {
        let indice = this.tasksArr.indexOf(task);
        this.tasksArr.splice(indice, 1);
        console.log(`Task ${task} removed from the list
      Number of items ${this.tasksArr.length}`);
        return this.tasksArr.length;
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
