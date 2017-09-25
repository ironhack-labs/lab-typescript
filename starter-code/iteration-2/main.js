class Todo {
    constructor() {
        this.TodoList = [];
    }
    addTask(arg) {
        this.TodoList.push(arg);
        console.log("Task added!");
        return this.TodoList.length;
    }
    listAllTasks() {
        for (var i = 0; i < this.TodoList.length; i++) {
            console.log(this.TodoList[i]);
        }
    }
    ;
    deleteTask(arg) {
        this.TodoList.splice(this.TodoList.indexOf(arg), 1);
        console.log("Item deleted!");
        return this.TodoList.length;
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
