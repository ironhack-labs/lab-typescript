class Todo {
    constructor(tasksList) {
        this.tasksList = tasksList;
    }
    addTask(task) {
        this.tasksList.push(task);
        console.log(`=========== NEW TASK ===========\n
                Task "${task}" inserted in the list\n
                Number of items: ${this.tasksList.length}`);
        return this.tasksList.length;
    }
    listAllTasks() {
        this.tasksList.forEach(task => {
            console.log(`=========== TASK ===========\n
                  Task: "${task}"`);
        });
    }
    deleteTask(task) {
        this.tasksList.splice(this.tasksList.indexOf(task), 1);
        console.log(`=========== TASK REMOVED ===========\n
                Task "${task}" removed from the list\n
                Number of items: ${this.tasksList.length}`);
        return this.tasksList.length;
    }
}
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
