class NuevaToDoList {
    constructor(list) {
        this.list = list;
    }
    addTask(task) {
        this.list.push(task);
        console.log(task);
        return this.list.length;
    }
    ;
    listAllTasks() {
        for (let task of this.list) {
            console.log(task);
        }
    }
    ;
    deleteTask(task) {
        this.list.splice(this.list.indexOf(task), 1);
        return this.list.length;
    }
    ;
}
let myTodos = new NuevaToDoList([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
