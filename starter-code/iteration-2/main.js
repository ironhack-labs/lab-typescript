class TodoList {
    constructor() {
        this.tasks = [];
    }
    ;
    addTask(taskToAdd) {
        this.tasks.push(taskToAdd);
        console.log(`
        =========== NEW TASK ===========
        Task "${taskToAdd}" inserted in the list
        Number of items: ${this.tasks.length}`);
        return this.tasks.length;
    }
    listAllTasks() {
        this.tasks.forEach(task => {
            console.log(task);
        });
    }
    deleteTask(taskToDelete) {
        this.tasks.forEach((task) => {
            if (task === taskToDelete) {
                this.tasks.splice(this.tasks.indexOf(task), 1);
                console.log(`
                =========== TASK REMOVED ===========
                Task "${taskToDelete}" removed from the list
                Number of items: ${this.tasks.length}`);
            }
        });
        return this.tasks.length;
    }
}
let myTodos = new TodoList();
console.log("Number of itemfs:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
