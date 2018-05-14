class TodoItem {
    constructor(title) {
        this.title = title;
        this.updatedAt = Date.now();
        this.status = false;
    }
    toggleStatus() {
        this.status = !this.status;
        this.updatedAt = Date.now();
    }
}
class TodoList {
    constructor() {
        this.array = [];
        this.addTask = (task) => {
            this.array.push(task);
            console.log(`Task ${task.title} inserted in the list`);
            return this.array.length;
        };
        this.listAllTasks = () => {
            this.array.forEach((element) => {
                console.log(element);
            });
        };
        this.deleteTask = (task) => {
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] === task) {
                    this.array.splice(i, 1);
                    break;
                }
            }
            console.log(`Task ${task.title} removed from the list`);
            return this.array.length;
        };
    }
}
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
let myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
