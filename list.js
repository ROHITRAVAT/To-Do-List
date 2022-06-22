document.querySelector('#add').onclick = function() { 

    if(document.querySelector('#inputtask input').value.length == 0){
        alert("Please Enter A Task");
    }
    else{
        document.querySelector('#list').innerHTML += `
        
<div class="task">
    <span id="taskname"> ${document.querySelector('#inputtask input').value} </span>
    <button class="delete">
        <i class="far fa-trash-alt"></i>
    </button>
</div>`; 

var current_tasks = document.querySelectorAll('.delete');



for (var i = 0; i < current_tasks.length; i++) {
current_tasks[i].onclick = function() {
    this.parentNode.remove();
}
}


var tasks = document.querySelectorAll('.task');


for (var i = 0; i < tasks.length; i++) {
tasks[i].onclick = function() {
    this.classList.toggle('completed');
}
}

document.querySelector('#inputtask input').value = "";
}

}
