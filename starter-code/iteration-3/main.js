class TodoItem {
    constructor(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    toggleStatus() {
        if (this.status == false) {
            this.status = true;
        }
        else {
            this.status = false;
        }
        this.updatedAt = new Date();
    }
}
class TodoList {
    constructor(myArray) {
        this.myArray = myArray;
    }
    addTask(task) {
        this.myArray.push(task);
        console.log(`=========== NEW TASK ===========
Task ${task} inserted in the list
Number of items: ${this.myArray.length}`);
        return this.myArray.length;
    }
    listAllTasks() {
        this.myArray.forEach((e) => {
            console.log(e.title);
        });
    }
    deleteTask(task) {
        let position = this.myArray.indexOf(task);
        this.myArray.splice(position, 1);
        console.log(`=========== TASK REMOVE ===========
Task ${task} remove in the list
Number of items: ${this.myArray.length}`);
        return this.myArray.length;
    }
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
