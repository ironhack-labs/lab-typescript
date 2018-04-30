class Todo {
    constructor() {
        this.chao = [];
    }
    addTask(value) {
        this.chao.push(value);
        console.log("Element inserted", this.chao.length);
        return this.chao.length;
    }
    listAllTask() {
        console.log(this.chao);
    }
    delete(value) {
        this.chao.splice(this.chao.indexOf(value), 1);
        console.log("Element deleted", this.chao.length);
        return this.chao.length;
    }
}
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTask();
console.log("Number of items:", myTodos.delete('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.delete('Finish this iteration 2!! 🤓'));
myTodos.listAllTask();
