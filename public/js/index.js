var toDo = document.querySelector('#toDo');

function functionClick(){
   var element = document.getElementById("idulsub-menu");
   var taskAdd = document.getElementById("idtask");
   element.classList.toggle("style_sub-menu");
   taskAdd.style.display = "flex";
   console.log("taskAdd"); 
}

function functionClickTaskAdd(){
    var element = document.getElementById("idulsub-menu");
    var taskAdd = document.getElementById("idtask");
    element.classList.toggle("style_sub-menu");
    taskAdd.style.display = "none"; 
 }


