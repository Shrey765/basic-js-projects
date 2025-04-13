const task =  document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(task.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement('li');
        li.innerHTML = task.value;
        listContainer.appendChild(li);  // appends the new li element into ul
        let span = document.createElement('span');
        span.innerHTML = '❌';
        li.appendChild(span);
    }

    task.value = "";
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){             // it checks if clicked tag is li or not
        e.target.classList.toggle('checked');   // adds the class 'checked' if it’s not there, or removes it if it is.
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();        // removes a tag from its parent container
    }

    saveData();
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();