class Todo {
    constructor() {
        this.arr2 = [];
    }
    addTask2(task) {
        this.arr2.push(task);
    }
    ;
    listAllTasks2() {
        console.log(this.arr2);
    }
    ;
    deleteTask2(task) {
        if (this.arr2.indexOf(task) >= 0) {
            this.arr2.splice(this.arr2.indexOf(task), 1);
        }
    }
    ;
}
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask2('This is our first task'));
console.log("Number of items:", myTodos.addTask2('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask2('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask2('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask2('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks2();
console.log("Number of items:", myTodos.deleteTask2('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask2('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks2();
