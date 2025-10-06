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

import { addNewRowWithJS } from "./blog.js";

const actionSubmitModal = () => {
    const updateBtn = document.getElementById("btnUpdateBlog");
    if (updateBtn) {
        updateBtn.addEventListener("click", async () => {

            //call update API
            const idElement = document.getElementById("idUpdate")! as HTMLInputElement;
            const titleElement = document.getElementById("titleUpdate")! as HTMLInputElement;
            const authorElement = document.getElementById("authorUpdate")! as HTMLInputElement;
            const contentElement = document.getElementById("contentUpdate")! as HTMLInputElement;


            await fetch(`http://localhost:8000/blogs/${idElement.value}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: titleElement.value,
                    author: authorElement.value,
                    content: contentElement.value,
                })

            });

            //update row, remove current row, add new row
            const btnUpdateElement = document.querySelector(`[data-update-id="${idElement.value}"]`)!;
            const row = btnUpdateElement.closest("tr");
            if (row) row.remove();

            addNewRowWithJS({
                id: +idElement.value,
                title: titleElement.value,
                author: authorElement.value,
                content: contentElement.value,
            })


            //close modal
            //@ts-ignore
            const modalBlog = bootstrap.Modal.getOrCreateInstance('#modalUpdateBlog', {
                keyboard: false
            })
            modalBlog.hide();

            //show toast
            //@ts-ignore
            const toast = new bootstrap.Toast("#updateBlogToast")
            toast.show();
        })
    }
}

const actionUpdate = (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", async () => {
        //set default input value
        const idElement = document.getElementById("idUpdate")! as HTMLInputElement;
        const titleElement = document.getElementById("titleUpdate")! as HTMLInputElement;
        const authorElement = document.getElementById("authorUpdate")! as HTMLInputElement;
        const contentElement = document.getElementById("contentUpdate")! as HTMLInputElement;

        idElement.value = btnElement.getAttribute("data-update-id")!;
        titleElement.value = btnElement.getAttribute("data-title")!;
        authorElement.value = btnElement.getAttribute("data-author")!;
        contentElement.value = btnElement.getAttribute("data-content")!;


        //show modal update
        //@ts-ignore
        const modalBlog = bootstrap.Modal.getOrCreateInstance('#modalUpdateBlog', {
            keyboard: false
        })
        modalBlog.show();
    })
}

const handleUpdateBlog = () => {
    const updateBtns = document.querySelectorAll(".edit-blog");

    if (updateBtns) {
        updateBtns.forEach((btn, index) => {
            const btnElement = btn as HTMLButtonElement;
            actionUpdate(btnElement);
        })
    }
}

export { handleUpdateBlog, actionUpdate, actionSubmitModal };