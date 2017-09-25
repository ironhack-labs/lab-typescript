class Todo {
    constructor(testArray) {
        this.testArray = testArray;
    }
    addTask(task) {
        this.testArray.push(task);
        var number = this.testArray.length;
        return number;
        console.log(task + "was added");
    }
    listAllTasks(task) {
        for (var i = 0; i < this.testArray.length; i++) {
            console.log(testArray[i]);
        }
    }
    deleteTask(task) {
        var index = this.testArray.indexOf(task, 0);
        if (index > -1) {
            this.testArray.splice(index, 1);
        }
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
