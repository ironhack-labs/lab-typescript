class Todo {
    constructor() {
        this.strings = [];
    }
    addTask(task) {
        this.strings.push(task);
        console.log('It works');
        return this.strings.length;
    }
    listAllTasks() {
        this.strings.forEach((el) => {
            console.log(el);
        });
    }
    deleteTask(task) {
        let pos = this.strings.indexOf(task);
        this.strings.splice(pos, 1);
        console.log('delete works');
        return this.strings.length;
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
