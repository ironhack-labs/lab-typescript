class Todo {
    constructor() {
        this.property = [];
    }
    addTask(str) {
        this.property.push(str);
        return this.property.length;
    }
    listAllTasks() {
        this.property.forEach(e => console.log(e));
    }
    deleteTask(str) {
        this.property.forEach((e, index) => {
            if (e == str)
                this.property.splice(index, 1);
        });
        return this.property.length;
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
