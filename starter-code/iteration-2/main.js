class Todo {
    constructor(store = []) {
        this.store = store;
    }
    addTask(task) {
        this.store.push(task);
        console.log(`There is ${task} adedd`);
        return this.store.length;
    }
    listAllTasks() {
        for (let i = 0; i < this.store.length; i++) {
            console.log(this.store[i]);
        }
    }
    deleteTask(task) {
        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i] == task) {
                this.store.splice(i, 1);
            }
        }
        console.log(`There is ${task} deleted`);
        return this.store.length;
    }
}
let myTodos = new Todo([]);
console.log('Number of items:', myTodos.addTask('This is our first task'));
console.log('Number of items:', myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log('Number of items:', myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log('Number of items:', myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log('Number of items:', myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log('Number of items:', myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log('Number of items:', myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
