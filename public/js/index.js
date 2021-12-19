var toDo = document.querySelector('#toDo');
var taskAdd = document.querySelector('.taskAdd');

toDo.addEventListener('click', function(){
    if(taskAdd.style.display === 'flex') {
        taskAdd.style.display = 'none';
    } else {
        taskAdd.style.display = 'flex';
    }
});


