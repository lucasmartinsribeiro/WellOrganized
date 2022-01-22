let btnAddTask = document.querySelector('.btn-add').addEventListener('click', addTask);
let inpDescription = document.querySelector("#inp-descript");
let inpColor = document.querySelector(".inp-color");

function clear(){
    inpDescription.value = "";
    inpColor.removeAttribute('checked', false);
}

function addTask(){
    let color = '';
    let description = '';
    let status = false;
    let arquive = false;

    description = document.getElementById('inp-descript').value;

    try {
        color = document.querySelector('input[name = "color-inp"]:checked').value;
    } catch {
        alert("A cor não foi escolhida ou não foi selecionada!");
    }

    if (description === '') {
        alert("Campo Descrição precisa ser preenchido!");
    } else {
        tasks = { 
             "description": description,
             "color": color, 
             "arquive": arquive,
             "status": status
        }

        let id = Math.floor(Math.random() * 10000 + 1);
        localStorage.setItem(id, JSON.stringify(tasks));
        clear();
    }
}

function loadTask(){}
function deleteTask(){}