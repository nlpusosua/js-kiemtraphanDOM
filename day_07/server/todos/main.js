let todos = [
    {
        id: 1,
        title: "Làm bài tập về nhà",
        status: true
    }, 
    {
        id: 2,
        title: "Đi chơi",
        status: false
    },
    {
        id: 3,
        title: "Đá bóng",
        status: true
    }
];

const generateId = () => {
    if(todos.length === 0) {
        return 1;
    }
    return Math.max(...todos.map(todo => todo.id)) + 1;
}

const ulEl = document.querySelector("ul")
const renderTodos = (todos) => {
    ulEl.innerHTML = "";
    if(todos.length === 0) {
        ulEl.insertAdjacentHTML("afterbegin", "<li>Danh sách công việc trống</li>");
        return;
    }

    let html = "";
    todos.forEach(todo => {
        html += `
                <li>
                    <input 
                    type="checkbox" 
                    ${todo.status ? "checked" : ""}
                    onchange="toggleStatus(${todo.id})"
                    >
                    <span class=${todo.status ? "active" : ""}>${todo.title}</span>
                    <button onclick="editTodo(${todo.id})">Edit</button>
                    <button onclick="deleteTodo(${todo.id})">Delete</button>
                </li>
                `;
    });
    ulEl.innerHTML = html;
}

// Thêm công việc
const inputTodo = document.getElementById("input-todo");
const btnAdd = document.getElementById("btn-add")

// btnAdd.addEventListener("click", () => {
//     // lấy nội dung trong ô input
//     const title = inputTodo.value.trim();
//     // kiểm tra nội dung có rỗng không
//     if(title === "") {
//         alert("Vui lòng nhập công việc")
//         return;
//     }

//     // tạo todo mới
//     const newTodo = {
//         id: generateId(),
//         title,
//         status: false
//     }

//     // thêm vào mảng todos
//     todos.push(newTodo);

//     // render lại giao diện
//     renderTodos(todos)

//     inputTodo.value = ""
//     inputTodo.focus();
// })



// const editTodo = (id) => {
//     todos.forEach(todo => {
//         if(todo.id === id) {
//             const prompt = window.prompt("Mời bạn nhập title muốn thay đổi")
//             if(prompt === "") {
//                 alert("Không được để trống")
//                 return
//             } else {
//                 todo.title = prompt
//             }
//             renderTodos(todos)
//         }
//     });
// }

// const toggleStatus = (id) => {
//     const todo = todos.find(todo => todo.id === id)
//     todo.status = !todo.status
//     renderTodos(todos)
// }



const API_URL="http://localhost:8000/todos";

const getAllTodos= async ()=>{
    try{
        const reponse = await axios.get(API_URL);
        console.log(reponse)
        todos = reponse.data; // lưu lại ds todo vào todos
        renderTodos(todos);// render lại giao diện

    } catch(error){
        console.log(error)
    }
}


// làm lại y hệt ban đầu nhưng cần thêm cả server vào

btnAdd.addEventListener("click", async() => {
    // lấy nội dung trong ô input
    const title = inputTodo.value.trim();
    // kiểm tra nội dung có rỗng không
    if(title === "") {
        alert("Vui lòng nhập công việc")
        return;
    }
    // tạo todo mới
    const newTodo = {        
        title,
        status: false
    }
    try {
         const response = await axios.post(API_URL, newTodo)
        
        // thêm vào mảng todos
    todos.push(response.data);

    // render lại giao diện
    renderTodos(todos)
    inputTodo.value = ""
    inputTodo.focus();
    } catch (error) {
        console.log(error)
    }
})

const deleteTodo = async (id) => {
    const confirmed = window.confirm("Bạn có chắc muốn xóa không?");
    if (confirmed) {
      try {
        // Xóa todo khỏi mảng todos trên client
        todos = todos.filter(todo => todo.id !== id);
        renderTodos(todos);
  
        // Gửi yêu cầu DELETE đến server
        await axios.delete(`${API_URL}/${id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editTodo = async (id) => {
    const todo = todos.find(todo => todo.id === id)

    const newTitle = window.prompt("Mời bạn nhập title muốn thay đổi")
    if(newTitle === "" || newTitle == null) {
        alert("Không được để trống")
        return
    }

    const editTitle = {
        title: newTitle,
        status: todo.status
    }

    try {
        const response = await axios.put(`${API_URL}/${id}`, editTitle)
        if(response.status === 200) {
            todo.title = newTitle
            renderTodos(todos)
        } else {
            console.log("sửa không thành công")
        }
    } catch (error) {
        console.log(error)
    }
}

const toggleStatus = async(id) => {
    const todo = todos.find(todo => todo.id === id)

    const newStatus = {
        title: todo.title,
        status: !todo.status
    }

    try {
        const response = await axios.put(`${API_URL}/${id}`, newStatus)
        if(response.status === 200) {
            todo.status = !todo.status
            renderTodos(todos)
        } else {
            console.log("không cập nhật được trạng thái")
        }
    } catch (error) {
        console.log
    }
    renderTodos(todos)
}


// tìm kiếm công việc


// btnSearch.addEventListener("click", async () => {
//     const titleSearch = inputSearch.value.trim()
//     if(titleSearch === "") {
//         alert("Vui lòng nhập công việc cần tìm kiếm")
//         return;
//     }

//     try {
//         const response = await axios.get(`${API_URL}?title_like=${titleSearch}`);
//         // render ra công việc được tìm kiếm
//         renderTodos(response.data)
//         inputSearch.value = "";
//     } catch (error) {
//         console.log(error)
//     }

// })

const btnSearch = document.getElementById("btn-sreach");
const inputSearch = document.getElementById("sreach-input-todo");

btnSearch.addEventListener("click", async () => {
    const titleSearch = inputSearch.value.trim();
    if (titleSearch === "") {
        alert("Vui lòng nhập công việc cần tìm kiếm");
        return;
    }

    try {
        const response = await axios.get(`${API_URL}?q=${titleSearch}`);
        // render ra công việc được tìm kiếm
        renderTodos(response.data);
        inputSearch.value = "";
    } catch (error) {
        console.log(error);
    }
});


getAllTodos()


