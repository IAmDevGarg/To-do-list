function add_todo(){
 var x = document.getElementById('task').value
 console.log(x)
 if(x === ""){
    alert("Please enter a task")
 }
 else{
    const node = document.createElement('div')
    node.className = 'list-group-item mb-2 list-group-item-secondary'
    const textnode = document.createTextNode(x)
    node.appendChild(textnode)
    var b = document.createElement('button')
    b.className = "btn btn-danger "
    b.textContent = "Clear task"
    b.style = "float: right"
    b.onclick= clear_task
    node.appendChild(b)
    var e = document.createElement('button')
    e.className = "btn btn-primary "
    e.textContent = "Edit"
    e.style = "float: right"
    e.onclick= edit_task
    node.appendChild(e)
    document.getElementById('result').appendChild(node)
    document.getElementById('task').value = ""
 

    function clear_todo(){
        document.getElementById('result').innerHTML = ""
    }
    function clear_task(e){
    e.target.parentElement.remove()
    }
    function edit_task(e){
        const newdiv = document.createElement('div')
        newdiv.className= 'container text-center'
        var i = document.createElement('input')
        i.className = 'form-control mt-3'
        newdiv.appendChild(i)
        var b1 = document.createElement('button')
        b1.className="btn btn-success"
        b1.textContent= 'Update'
        b1.onclick = edit_text
        newdiv.appendChild(b1)
        var b2 = document.createElement('button')
        b2.className="btn btn-danger"
        b2.textContent= 'Clear'
        b2.onclick = clear_text
        newdiv.appendChild(b2)
        e.target.parentElement.appendChild(newdiv)
        
    }
    function edit_text(e){
        y = e.target.parentElement.firstChild.value
        const textnode1 = document.createTextNode(y)
        e.target.parentElement.parentElement.replaceChild(textnode1,e.target.parentElement.parentElement.firstChild)
        e.target.parentElement.remove()
     }
     function clear_text(e){
        e.target.parentElement.remove()
     }
 }
}