class TodoItem {
    constructor(title, status = false) {
        this.title = title;
        this.status = status;
    }
    toggleStatus() {
        status = !status;
        updatedAt = new Date;
    }
}
class TodoList {
    constructor(list) {
        this.list = list;
    }
    addTask(task) {
        this.list.push(task);
        console.log('Task ' + task + ' added');
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
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
let myTodos = new TodoList([]);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
