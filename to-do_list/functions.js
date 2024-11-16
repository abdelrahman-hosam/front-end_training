var insert = document.getElementById("insert")
var show = document.getElementById("todos")
insert.addEventListener("click" , function (){
    var todo = document.getElementById("todo").value
    if(todo !== ""){
    var new_todo = document.createElement('p')
    var remove = document.createElement('button')
    var update = document.createElement('button')
    var card = document.createElement('div')
    new_todo.innerHTML = todo
    remove.innerHTML = "remove"
    update.innerHTML = "update"
    card.append(new_todo , remove , update)
    show.appendChild(card)
    remove.addEventListener("click" , function(){
        card.remove()
    })
    update.addEventListener("click" , function(){
        remove.style.visibility = "hidden"
        update.style.visibility = "hidden"
        var updated_todo = ""
        var old_todo = new_todo.innerHTML
        var update_todo = document.createElement('input')
        update_todo.type = "text"
        update_todo.value = new_todo.innerHTML
        var insert = document.createElement('button')
        insert.type = "button"
        insert.innerHTML = "update to do"
        card.append(insert , update_todo)
        insert.addEventListener("click" , function(){
            updated_todo = update_todo.value
            insert.remove()
            update_todo.style = new_todo.style
            update_todo.remove()
            if(updated_todo === "" || updated_todo === " "){
                new_todo.innerHTML = old_todo
            }
            else{
                new_todo.innerHTML = updated_todo
            }
            update.style.visibility = "visible"
            remove.style.visibility = "visible"
        })
    })
    }
}
)