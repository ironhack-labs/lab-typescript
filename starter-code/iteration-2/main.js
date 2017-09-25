class Todo {
    constructor() {
        this.list = [];
    }
    addTask(nameTask) {
        this.list.push(nameTask);
        console.log("Task: " + nameTask + " inserted in the list");
        return this.list.length;
    }
    listAllTasks() {
        for (var i = 0; i < this.list.length; i++) {
            console.log(this.list[i]);
        }
    }
    deleteTask(nameTask) {
        var position = this.list.indexOf(nameTask);
        if (position === -1) {
            console.log("no match");
        }
        else {
            this.list.splice(position, 1);
            console.log("Task: " + nameTask + " deleted from the list");
            return this.list.length;
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
