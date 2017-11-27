class Todo {
    constructor() {
        this.myList = [];
    }
    addTask(task) {
        this.myList.push(task);
        return this.myList.length;
    }
    listAllTasks() {
        this.myList.forEach(e => console.log(e));
    }
    deleteTask(taskToDelete) {
        this.myList.splice(this.myList.indexOf(taskToDelete), 1);
        return this.myList.length;
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
