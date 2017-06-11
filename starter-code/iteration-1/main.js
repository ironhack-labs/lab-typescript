var myArray = [];
var addTask = function (myTask) {
    this.myArray.push(myTask);
    return myTask.length;
};
var listAllTasks = function () {
    this.myArray.forEach(function (myTask) {
        console.log(myTask);
    });
};
var deleteTask = function (myTask) {
    var index = this.myArray.indexOf(myTask);
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
