let btnAddTask = document.querySelector('.btn-add').addEventListener('click', addTask);

function addTask(){
    let color = '';
    let description = '';
    let status = false;
    let arquive = false;

    description = document.getElementById('descript').value;

    try {
        color = document.querySelector('div[name = "color"]: checked').value;
    } catch (error) {
        alert("A cor não foi escolhida ou não foi selecionada!");
    }

    if (description == '') {
        alert("Campo Descrição precisa ser preenchido");
    } else {
        tasks = { 
             "description": description,
             "color": color, 
             "arquive": arquive,
             "status": status
        }

        let id = Math.floor(Math.random() * 10000 + 1);
        localStorage.setItem(id, JSON.stringify(tasks));
    }
}

function loadTask(){}
function deleteTask(){}