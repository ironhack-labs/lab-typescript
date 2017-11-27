class TodoItem {
    constructor(title, status = true, updatedAt = new Date()) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    toggleStatus() {
        this.status = this.status === true ? false : true;
        this.updatedAt = new Date();
    }
}
class TodoList {
    constructor(tasksList) {
        this.tasksList = tasksList;
    }
    addTask(task) {
        this.tasksList.push(task);
        console.log(`=========== NEW TASK ===========\n
                Task "${task.title}" inserted in the list\n
                Number of items: ${this.tasksList.length}`);
        return this.tasksList.length;
    }
    listAllTasks() {
        this.tasksList.forEach(task => {
            console.log(`=========== TASK ===========\n
                  Task: "${task.title}"`);
        });
    }
    deleteTask(task) {
        this.tasksList.splice(this.tasksList.indexOf(task), 1);
        console.log(`=========== TASK REMOVED ===========\n
                Task "${task.title}" removed from the list\n
                Number of items: ${this.tasksList.length}`);
        return this.tasksList.length;
    }
    listUncomplete() {
        this.tasksList.filter(item => item.status).forEach(task => {
            console.log(`=========== TASK ===========\n
                  Task: "${task.title}"`);
        });
    }
}
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
console.log(task1, task2, task3, task4, task5);
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
myTodos.listUncomplete();
