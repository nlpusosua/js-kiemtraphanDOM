let todos=[{
    id:1,
    title:"làm bài tập về nhà",
    status: true
},
{
    id:2,
    title:"đi chơi",
    status: false
},
{
    id:3,
    title:"đá bóng",
    status: false
}]

const ulEl= document.querySelector("ul")
const renderTodos= (todos)=>{
    if(todos.length===0){
        ulEl.insertAdjacentHTML("afterbegin", "<li> danh sách công việc trống </li>");
        return;
    }

    let html ="";
    todos.forEach(todo => {
        html +=`
        <li>
            <input type="checkbox">
            <span>${todo.title}</span>
            <button>Edit</button>
            <button>Delete</button>
        </li>
        `;
        
    });
    ulEl.innerHTML= html;

}

renderTodos(todos);