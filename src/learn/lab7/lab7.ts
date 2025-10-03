export{} ; 
console.log("Hello") ; 


interface IBlog {
    id : number ; 
    title : string ; 
    author : string ; 
    content : string ; 
}

const fetchBlogs =async () => {
    const blog  = await fetch("http://localhost:8000/blogs") ; 
    const data =(await blog.json())  as IBlog[] ; 
    //check lai hinh thu data(joi , zod...)
    const tbody =( document.getElementById("#body"))  as HTMLElement ; 
    if(data)
    data.forEach((value , index) => {
        tbody!.innerHTML += `
        <tr>
            <td>${value.id}</td>
            <td>${value.title}</td>
            <td>${value.author}</td>
            <td>${value.content}</td>
        </tr> `
    })


}
fetchBlogs() ; 
