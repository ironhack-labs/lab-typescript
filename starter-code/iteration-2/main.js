class ToDo {
    constructor(tasksArray = []) {
        this.tasksArray = tasksArray;
    }
    addTask(task) {
        this.tasksArray.push(task);
        return this.tasksArray.length;
    }
    listAllTasks() {
        this.tasksArray.forEach(elem => {
            console.log(elem);
        });
    }
    deleteTask(task) {
        this.tasksArray.splice(this.tasksArray.indexOf(task), 1);
        console.log(`Task "${task}" has been deleted`);
        return this.tasksArray.length;
    }
}
let myToDos = new ToDo();
console.log("Number of items:", myToDos.addTask('first task'));
console.log("Number of items:", myToDos.addTask('second task'));
console.log("Number of items:", myToDos.addTask('third task'));
console.log("Number of items:", myToDos.addTask('fourth task'));
console.log("Number of items:", myToDos.addTask('fifth task'));
myToDos.listAllTasks();
console.log("Number of items:", myToDos.deleteTask('third task'));
myToDos.listAllTasks();
