let inputField = document.getElementById('inputField');
let btn = document.getElementById('btn-add');
let tasksContainer = document.getElementById('tasksContainer');

btn.addEventListener('click', function(){
    let task = document.createElement('p');
    task.innerText = inputField.value;
    tasksContainer.appendChild(task);
    inputField.value = "";
    task.classList.add('taski');

    task.addEventListener('click', function(){
        task.style.textDecoration = 'line-through';
        //jeżeli element ma klasę ''line'' to wtedy usuwa textdecoration
        if (task.classList.contains('linia') == false) {
            task.style.textDecoration = 'line-through';
            task.classList.add('linia');
        }
        else if (task.classList.contains('linia') == true){
            task.style.textDecoration = 'none';
            task.classList.remove('linia');
        }

        task.addEventListener('dblclick', function(){
            tasksContainer.removeChild(task);
        })
    })

    

});



