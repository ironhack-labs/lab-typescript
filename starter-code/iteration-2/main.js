class Todo {
    constructor(taskList = []) {
        this.taskList = taskList;
    }
    addTask(task) {
        this.taskList.push(task);
        console.log(`Added ${task} task`);
        console.log("Number of tasks " + this.taskList.length);
        return this.taskList.length;
    }
    listAllTasks() {
        this.taskList.forEach((oneTask) => {
            console.log(oneTask);
        });
    }
    deleteTask(task) {
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i] == task) {
                this.taskList.splice(i, 1);
            }
        }
        console.log(`Delete ${task} task`);
        console.log("Number of tasks " + this.taskList.length);
        return this.taskList.length;
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
