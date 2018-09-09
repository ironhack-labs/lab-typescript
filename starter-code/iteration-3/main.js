class TodoItem {
    constructor(title, status = false, updatedAt = new Date()) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    toggleStatus(task) {
        task.status = !this.status;
        console.log(`Task "${task.title} is complete"`);
    }
}
class TodoList {
    constructor(arrayTasks = [], uncompletedTasks = []) {
        this.arrayTasks = arrayTasks;
        this.uncompletedTasks = uncompletedTasks;
    }
    addTask(task) {
        console.log(`=========== NEW TASK ===========`);
        this.arrayTasks.push(task);
        console.log(`Insertion done!!!!`);
        return this.arrayTasks.length;
    }
    listAllTasks() {
        this.arrayTasks.forEach((task) => {
            console.log(task.title);
        });
    }
    deleteTask(task) {
        console.log(`=========== DELETE TASK ===========`);
        this.arrayTasks.splice(this.arrayTasks.indexOf(task), 1);
        console.log(`Deletion done!!!!`);
        return this.arrayTasks.length;
    }
    listUncomplete() {
        return this.uncompletedTasks = this.arrayTasks.filter((task) => {
            return task.status !== true;
        });
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
myTodos.listUncomplete();
