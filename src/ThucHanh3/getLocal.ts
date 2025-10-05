

type myTodo = {
    id  : number ; 
    name : string ; 
}

const getLocal = () => {
    const tableBody = document.querySelector("#tableTodo tbody") ;
    const todoStr = localStorage.getItem("todoList")  

   if(todoStr && tableBody)
   {
    const data = JSON.parse(todoStr)  as myTodo[]; 
    data.forEach((value , index)=> {
        tableBody.innerHTML += `
            <tr>
            <th scope="row">${index + 1 }</th>
            <td>${value.id}</td>
            <td>${value.name}</td>
            <td><button
             class = "btn btn-danger delete-btn"
             data-id=${value.id} ; 
             >
             Xoá</button></td>
           </tr>
        `
    })
    
   }

}
export{getLocal} ; 