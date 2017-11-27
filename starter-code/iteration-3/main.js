class TodoItem {
    constructor(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date;
    }
    toogleStatus() {
        (this.status) ? this.status = false : this.status = true;
    }
}
class TodoList {
    constructor() {
        this.list = [];
    }
    addTask(task) {
        this.list.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task" + task + "inserted in the list");
        return this.list.length;
    }
    listAllTasks() {
        console.log("=========== ALL TASKS ===========");
        this.list.forEach(e => {
            console.log(e);
        });
    }
    deleteTask(task) {
        this.list.splice(this.list.indexOf(task), 1);
        console.log("=========== TASK REMOVED ===========");
        console.log("Task" + task + "removed from the list");
        return this.list.length;
    }
    listUncomplete() {
        console.log("=========== UNCOMPLETED TASKS ===========");
        this.list.forEach(e => {
            if (e.status == false)
                console.log(e);
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
