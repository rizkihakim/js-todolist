console.log("Bisa!");

var taskId = 0;

console.log(taskId);
function addToList() {
  document.getElementById("list").innerHTML += '<li id='+ taskId + '>' + document.getElementById("input-task").value +
  '<button type="button" id=' ' onclick="addToList()" name="button">x</button>' + "</li>";
  taskId++;
  //console.log(document.getElementById("input-task").value);
}

function clearList() {
  document.getElementById("list").innerHTML = "";
}
