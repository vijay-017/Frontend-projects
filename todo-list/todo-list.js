let todoList = [];

document.querySelector('.js-add-btn').addEventListener('click',()=>{
  add();
})

 function add(){
    let todoItemInput = document.querySelector('.todoItem').value;

    let dueDate = document.querySelector('.dateInput').value;

    todoList.push({name : todoItemInput , dueDate : dueDate});
    
    renderTodoList();
  }

  function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach(function(todoObject,index){
      const todoItemHTML = `
       <div> ${todoObject.name}  </div>
        <div> ${todoObject.dueDate} </div>
        <button class="delete-btn js-delete-btn">Delete</button>
     `;
     todoListHTML += todoItemHTML;
    })
    
    document.querySelector('.js-listItems').innerHTML=todoListHTML;
    
    document.querySelector('.todoItem').value ='';
    document.querySelector('.dateInput').value ='';

    document.querySelectorAll('.js-delete-btn').forEach((value,index)=>{
      value.addEventListener('click',()=>{
        todoList.splice(index,1);
        renderTodoList();
      })
    })
      

  }



 