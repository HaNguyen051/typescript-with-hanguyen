

type myTodo = {
    id  : number ; 
    name : string ; 
}
const deleteTodo = () => {
    const allDeleteBtn = document.querySelectorAll(".delete-btn") ;
    allDeleteBtn.forEach((value , index) => {
        const button = value  as HTMLButtonElement ; 
        button.addEventListener('click' , ()=>{
            const id = button.getAttribute("data-id") ; 
            
            //delete todo
            if(id){
                removeTodo(+id)
            } 
        })
    })
}
const removeTodo = (id:number ) => {
    const todoListStr = localStorage.getItem("todoList") ; 
    if(todoListStr)
    {
        const todoList = JSON.parse(todoListStr) as myTodo[] ;
        const newList = todoList.filter(todo => todo.id != id) ; 
        localStorage.setItem("todoList" , JSON.stringify(newList)) ;
        window.location.reload();   
    }
}
export{deleteTodo} ; 