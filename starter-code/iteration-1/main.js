var myArray = [];
var addTask = function (task) {
    this.myArray.push(task);
};
var listAllTasks = function () {
    this.myArray.forEach(function (task) {
        console.log(task);
    });
};
var deleteTask = function (task) {
    var index = this.myArray.indexOf(task);
    this.myArray.splice(index, 1);
    return this.myArray.length;
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
