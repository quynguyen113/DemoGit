const todoList = [
    {
        name: 'Choi game', 
        creator:'Nguyen Van A'
    },
    {
        name: 'Xem TV', 
        creator:'Tran Van B'
    }
]

renderTodoList()
function renderTodoList(){
    let todoListHTML = ''

    for (let i=0; i<todoList.length; i++){
        const todoObject = todoList[i]        
        const { name, creator } = todoObject
        const html = `
            <div>Task ${i+1}</div> 
            <div>${name} </div>
            <div>${creator}</div>

            <button onclick="
                doneButton()
            ">Done</button>

            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
        ` 
        todoListHTML += html
    
    }
    console.log(todoListHTML)
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML
}
function doneButton() {
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value

    const inputCreator = document.querySelector('.js-creator-input')
    const creator = inputCreator.value
    todoList.push(
        {
        name, creator
        }
    )
    console.log(todoList)

    inputElement.value = '' 

    renderTodoList()
}
