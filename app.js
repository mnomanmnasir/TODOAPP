
var list = document.getElementById('list');


function addTodo()

{
    var todo_item = document.getElementById('todoitem')

    
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);   
    

    var delBtn = document.createElement("button")

    var delText = document.createTextNode("DELETE")

    delBtn.setAttribute("class","Btn")
    delBtn.setAttribute("onclick","deleteItem(this)") //this pora button console pr dyga 
    delBtn.appendChild(delText)


    //create edit button

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")

    
    editBtn.setAttribute("class","Btn")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(editBtn)


    
    li.appendChild(delBtn)



    // console.log(li)

    todo_item.value = " "
    list.appendChild(li)
    // console.log(todo_item.value)
}


function deleteItem(e){

    
    e.parentNode.remove(); // ye function remove krdeyga item

}


function deleteall(){
    
    list.innerHTML = " "
}




function editItem(e){

    var editValue = prompt("Enter edit value",e.parentNode.firstChild.nodeValue);
    // console.log(e.parentNode.firstChild)

    e.parentNode.firstChild.nodeValue = editValue
}