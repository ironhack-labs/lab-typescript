class Todo {
    constructor() {
        this.myArray = [];
    }
    addTask(task) {
        this.myArray.push(task);
        console.log(`========== NEW TASK ========== 
        ${task}`);
        return this.myArray.length;
    }
    listAllTasks() {
        this.myArray.forEach(function (task) {
            console.log(task);
        });
    }
    deleteTask(task) {
        let deleteIndex = this.myArray.indexOf(task);
        if (deleteIndex !== -1) {
            this.myArray.splice(deleteIndex, 1);
            console.log(`========== TASK REMOVED ==========
            ${task}`);
        }
        return this.myArray.length;
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
