document.getElementById("add-task-btn").addEventListener('click',addTask)


function addTask(){
    const ulTag = document.getElementById("task-list")
    const aTask = document.getElementById("task-input").value.trim()

    if (aTask){
        const liTag = document.createElement('li')
        const spanTag = document.createElement('span')

        
        spanTag.textContent = aTask
        
    
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
    
        const editBtn = document.createElement("button")
        editBtn.id = 'edit-btn'
        editBtn.textContent = "Edit"
    
        deleteBtn.addEventListener('click', () => {
            liTag.remove()
        })
    
        editBtn.addEventListener('click', () => {
            console.log(spanTag.textContent)
            const editInput = document.createElement("input")
            editInput.type = "text"
            editInput.id = "edit-input"
            editInput.value = spanTag.textContent

            const saveBtn = document.createElement('button')
            saveBtn.id = "save-btn"
            saveBtn.textContent = "Save"

            saveBtn.addEventListener('click', () => {

                spanTag.textContent = document.getElementById("edit-input").value

                liTag.replaceChild(spanTag , editInput )
                liTag.replaceChild(editBtn , saveBtn )
            })

            liTag.replaceChild(editInput ,spanTag)
            liTag.replaceChild(saveBtn , editBtn)
        })

    
        

        liTag.appendChild(spanTag)
        liTag.appendChild(editBtn)
        liTag.appendChild(deleteBtn)
        ulTag.appendChild(liTag)
    
        document.getElementById("task-input").value = ""

    }
}