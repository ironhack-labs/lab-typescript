// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.

class Todo {
    tasksList: Array<string>;
    addTask(task: string) {
        this.tasksList.push(task)
    }
    listAllTasks() {
        this.tasksList.forEach(element => {
        console.log(element)
        });
    }
    deleteTask(task) {
        let index: number = this.tasksList.indexOf(task);
        this.tasksList.splice(index, 1);
    }
}

export { Todo };