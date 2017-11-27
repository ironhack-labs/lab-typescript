class Todo {
    constructor(taskArray) {
        this.taskArray = taskArray;
        this.addTask = function (task) {
            console.log("Task :" + task + "inserted in the list");
            this.taskArray.push(task);
            return this.taskArray.length;
        };
        this.listAllTasks = function () {
            this.taskArray.forEach(e => {
                console.log(e);
            });
        };
        this.deleteTask = function (task) {
            let index = this.taskArray.indexOf(task);
            this.taskArray.splice(index, 1);
            console.log("Task :" + task + "removed from the list");
            return this.taskArray.length;
        };
    }
}
let arr = [];
let myTodos = new Todo(arr);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
