var tarefas = [];
var cardStyle = document.querySelector("card-style");

var btnAdd = document.querySelector("#btn-add");
var inpDescript = document.querySelector("inp-descript");
var color1 = document.querySelector("square1");
var color2 = document.querySelector("square2");
var color3 = document.querySelector("square3");
var color4 = document.querySelector("square4");
var color5 = document.querySelector("square5");
var color6 = document.querySelector("square6");
var color7 = document.querySelector("square7");

function limpar(){
    inpDescript.value = "";
}

function exibir(){
    cardStyle.innerHTML = "";

    for(var i = 0; i< tarefas.length; i++){
        var cardStyle = document.createElement("div");
        var cardId = document.createElement("");
        
        
        var t = tarefas[i];

        tdId.innerText = f.id;
        

        tr.appendChild(tdId);
    }
}