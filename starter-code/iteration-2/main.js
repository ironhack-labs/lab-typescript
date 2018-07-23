class MyTodos {
    constructor() {
        this.taskArrayTwo = [];
    }
    addTask(task) {
        this.taskArrayTwo.push(task);
        return this.taskArrayTwo.length;
    }
    listAllTasks() {
        this.taskArrayTwo.forEach(function (eachTask) {
            console.log(eachTask);
        });
    }
    deleteTask(task) {
        const theIndex = this.taskArrayTwo.indexOf(task);
        this.taskArrayTwo.splice(theIndex, 1);
        return this.taskArrayTwo.length;
    }
}
;
let myTodos = new MyTodos();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
