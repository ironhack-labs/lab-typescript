class Todo {
    addTask(task) {
        console.log(`Task ${task} inserted in the list`);
        console.log(`Number of items: ${taskArr.length}`);
        return this.taskArr.length;
    }
    listAllTasks() {
        taskArr.forEach(elem => {
            console.log(elem);
        });
        console.log(taskArr);
    }
    deleteTask(task) {
        let index = taskArr.indexOf(task);
        if (index !== -1) {
            taskArr.splice(index, 1);
        }
        console.log(this.taskArr.length);
        return this.taskArr.length;
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
