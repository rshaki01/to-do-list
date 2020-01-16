
// var dateElement = document.getElementById("date");
//
// // Show date
//
// var today = new Date();
// var options = {weekday:"long", month:"short", day:"numeric"};
// dateElement.innerHTML = today.toLocaleDateString("en-us", options);

// Select elements

var taskInput = document.getElementById('taskInput');
var taskHeader = document.getElementById('taskHeader').addEventListener('submit', addTask);
var taskList = document.getElementById('taskList');
// var closeBtns = document


var taskName = taskInput.value;

// variables

let LIST, taskNum;

LIST = [];
taskNum = 0;

function addTask(e) {

  if (taskInput.value) {
    taskList.innerHTML += '<li>'+ taskInput.value + '<span class="close"><button type="button" job="delete" class="btn btn-danger btn-sm">x</button></span>';

    LIST.push({
      name: taskInput.value,
      taskNum: taskNum
    })

    taskNum++;


  }

  taskInput.value = '';
  e.preventDefault();
}

// Deleting tasks




























// function deleteTask(element) {
//
//   // element.parentNode.parentNode.removeChild(element.parentNode);
//
//   // LIST.splice()
// }

// deleting Tasks

// taskList.addEventListener("click", function(event){
//   const element = event.target; // return the clicked element inside list
//   const elementJob = element.attributes.job.value; // complete or delete
//
//   if (elementJob == "delete") {
//     deleteTask(element)
//   }
// })
