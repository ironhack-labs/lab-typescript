var Todo = (function () {
    function Todo(myList) {
        if (myList === void 0) { myList = []; }
        this.myList = myList;
    }
    Todo.prototype.addTask = function (task) {
        return myList.push(task);
    };
    Todo.prototype.listAllTasks = function () {
        return myList.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        myList.forEach(function (oneTask) {
            myList.indexOf(oneTask);
            if (myList.indexOf(oneTask) === myList.indexOf(task)) {
                myList.splice(myList.indexOf(task), 1);
                console.log('Task deleted: ' + task + 'great.');
            }
        });
        return myList.length;
    };
    return Todo;
}());
var myTodoList = new Todo();
console.log("Number of items:", myTodoList.addTask('This is our first task'));
console.log("Number of items:", myTodoList.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodoList.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodoList.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodoList.addTask('Finish this iteration 3!! 🤓'));
myTodoList.listAllTasks();
console.log("Number of items:", myTodoList.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodoList.deleteTask('Finish this iteration 2!! 🤓'));
myTodoList.listAllTasks();
