const todoInput = document.getElementById('todoinput');
const submitInput = document.getElementById('submitinput');
const todoList = document.querySelector('.todolist');
const todoContainer = document.getElementById('todocontainer');


submitInput.addEventListener('click' , () => {
    if(todoInput.value === false ) {
        alert('Enter what you want to do');
    } else {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        let newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todoitem');
        todoDiv.appendChild(newTodo);

        const checkTodo = document.createElement('button');
        checkTodo.innerHTML = '<i class="fas fa-check-circle"> </li>';
        checkTodo.classList.add('checkbtn');
        todoDiv.appendChild(checkTodo);

        const editTodo = document.createElement('button');
        editTodo.innerHTML = '<i class="fa fa-pen"> </li>';
        editTodo.classList.add('editbtn');
        todoDiv.appendChild(editTodo);

        const deleteTodo = document.createElement('button');
        deleteTodo.innerHTML = '<i class="fas fa-trash-alt"> </li>';
        deleteTodo.classList.add('deletebtn');
        todoDiv.appendChild(deleteTodo);

        todoList.appendChild(todoDiv);
        todoInput.value = '';
    }
})

todoList.addEventListener('click' , check);
function check(e) {
    let myTodo = e.target;
    
    // console.log(myTodo.parentElement)
    // console.log(myTodo.parentElement.classList[0]);
	let manipulateTodo = myTodo.parentElement;
    if(myTodo.classList[0] === 'deletebtn'){
        todoList.removeChild(manipulateTodo);
    }

    if(myTodo.classList[0] === 'checkbtn') {
        manipulateTodo.classList.toggle('checked');
    } 

	if(myTodo.classList[0] === 'editbtn') {
        
        let editManipulateTodo = manipulateTodo.childNodes[0];
        // console.log(editManipulateTodo);
        // editManipulateTodo.toggleAttribute("contenteditable");
        // editManipulateTodo.setAttribute('autofocus' , 'true')
        // toggleAttribute("readonly");

        if(!editManipulateTodo.hasAttribute('contenteditable')) {
            
            editManipulateTodo.setAttribute('contenteditable' , 'true');
            editManipulateTodo.setAttribute('autofocus' , 'true');
            // console.log(editManipulateTodo)

        } else {
            editManipulateTodo.removeAttribute('contenteditable');
            // console.log(editManipulateTodo)
        }
    }
}

