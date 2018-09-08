class Todo {
    addTask(task) {
        console.info(` Task ${task} inserted in the list`);
        this.tasks.push(task);
        return this.tasks.length;
    }
    listAllTasks() {
        this.tasks.forEach(element => console.info(element));
    }
    deleteTask(task) {
        this.tasks.splice(tasks.indexOf(task), 1);
        console.info(`Task ${task} removed from the list`);
        return this.tasks.length;
    }
}
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
