// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.
class TodoItem {
    title: string;
    done: boolean;
    updatedAt: Date;
    toogle() {
        if (this.done) { this.done = false } else { this.done = true }
    };
}

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.

class Todo {
    tasksList: Array<TodoItem>;
    addTask(task) {
        task = new TodoItem;
        this.tasksList.push(task)
    }
    listAllTasks() {
        this.tasksList.forEach(element => {
            console.log(element);
        });
    }
    deleteTask(task) {
        task = new TodoItem;
        let index: number = this.tasksList.indexOf(task);
        this.tasksList.splice(index, 1);
    };

    listTasksNotDone() {
        this.tasksList.forEach(element => {
            if (element.done === false) {
                console.log(element);
            }
        });
    };
}