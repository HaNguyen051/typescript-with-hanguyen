/*
* Author: Hỏi Dân IT - @hoidanit   
* 
* This source code is developed for the course 
* "TypeScript Pro - Tự Học TypeScript & JavaScript từ số 0". 
* It is intended for educational purposes only. 
* Unauthorized distribution, reproduction, or modification is strictly prohibited. 
* 
* Copyright (c) 2025 Hỏi Dân IT. All Rights Reserved. 
*/


const actionDelete = (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", async () => {
        const id = btnElement.getAttribute("data-id");
        if (id) {
            //call delete API
            await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            //show toast
            //@ts-ignore
            const toast = new bootstrap.Toast("#deleteBlogToast")
            toast.show();

            //remove row
            const row = btnElement.closest("tr");
            if (row) row.remove();
        }
    })
}

const handleDeleteBlog = () => {
    const deleteBtns = document.querySelectorAll(".delete-blog");

    if (deleteBtns) {
        deleteBtns.forEach((btn, index) => {
            const btnElement = btn as HTMLButtonElement;
            actionDelete(btnElement);
        })
    }
}

export { handleDeleteBlog, actionDelete };