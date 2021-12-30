function functionClick(){
   var element = document.getElementById("idulsub-menu");
   var taskAdd = document.getElementById("idtask");
   var toDo = document.getElementById("toDo");

   element.classList.toggle("style_sub-menu");
   taskAdd.style.display = "flex";

   if (taskAdd.style.display === "flex") {
      toDo.disabled = true;
      console.log(toDo)
      console.log(taskAdd)
   }

}

function functionClickTaskAdd(){
    var element = document.getElementById("idulsub-menu");
    var taskAdd = document.getElementById("idtask");
    element.classList.toggle("style_sub-menu");
    taskAdd.style.display = "none";
   }
