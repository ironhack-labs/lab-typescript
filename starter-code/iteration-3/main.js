class TodoItem {
    constructor(title) {
        this.done = false;
        this.updatedAt = new Date();
        this.title = title;
    }
    ;
    toggleStatus(done) {
        if (done) {
            !done;
        }
        this.updatedAt = new Date;
    }
    ;
}
class TodoList {
    constructor() {
        this.listItems = [];
    }
    ;
    addTask(taskToAdd) {
        this.listItems.push(taskToAdd);
        console.log(`
        =========== NEW TASK ===========
        Task "${taskToAdd}" inserted in the list
        Number of items: ${this.listItems.length}`);
        return this.listItems.length;
    }
    listAllTasks() {
        this.listItems.forEach(task => {
            console.log(task);
        });
    }
    deleteTask(taskToDelete) {
        this.listItems.forEach((task) => {
            if (task.title === taskToDelete.title) {
                this.listItems.splice(this.listItems.indexOf(task), 1);
                console.log(`
                =========== TASK REMOVED ===========
                Task "${taskToDelete}" removed from the list
                Number of items: ${this.listItems.length}`);
            }
        });
        return this.listItems.length;
    }
}
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
let myTodos = new TodoList();
console.log("iteration 3 =======================>");
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listAllTasks();
