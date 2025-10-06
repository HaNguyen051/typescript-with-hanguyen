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

import { actionDelete, handleDeleteBlog } from "./delete-blog.js";
import { actionSubmitModal, actionUpdate, handleUpdateBlog } from "./update.blog.js";

interface IBlog {
    id: number;
    title: string;
    author: string;
    content: string;
}

const renderTable = (data: IBlog[]) => {
    const tbody = document.querySelector("#tableBlog tbody");
    if (tbody) {
        data.forEach((blog, index) => {
            tbody.innerHTML +=
                `
                    <tr>
                        <td>${blog.id}</td>
                        <td>${blog.title}</td>
                        <td>${blog.author}</td>
                        <td>${blog.content}</td>
                        <td>
                            <button 
                                class="btn btn-warning edit-blog"
                                data-update-id="${blog.id}"
                                data-title="${blog.title}"
                                data-author="${blog.author}"
                                data-content="${blog.content}"
                            >
                                Edit
                            </button>

                            <button 
                                class="btn btn-danger delete-blog"
                                data-id=${blog.id}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                   
            `
        })
    }
}

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json() as IBlog[];
    renderTable(data);
}

export const addNewRowWithJS = (blog: IBlog) => {
    const tableBody = document.querySelector('#tableBlog tbody')!;

    // Tạo phần tử dòng mới
    const newRow = document.createElement('tr');

    // Gán HTML cho dòng
    newRow.innerHTML = `
                    <tr>
                        <td>${blog.id}</td>
                        <td>${blog.title}</td>
                        <td>${blog.author}</td>
                        <td>${blog.content}</td>
                        <td>
                            <button 
                                class="btn btn-warning edit-blog"
                                data-update-id="${blog.id}"
                                data-title="${blog.title}"
                                data-author="${blog.author}"
                                data-content="${blog.content}"
                            >
                                Edit
                            </button>

                            <button 
                                class="btn btn-danger delete-blog"
                                data-id=${blog.id}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
  `;

    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);

    //gán sự kiện onClick cho row vừa tạo
    const btnDeleteElement = document.querySelector(`[data-id="${blog.id}"]`)!;
    actionDelete(btnDeleteElement as HTMLButtonElement);

    const btnUpdateElement = document.querySelector(`[data-update-id="${blog.id}"]`)!;
    actionUpdate(btnUpdateElement as HTMLButtonElement);
}

const handleCreateBlog = () => {
    const btnCreate = document.getElementById("btnCreateBlog");
    if (btnCreate) {
        btnCreate.addEventListener("click", async () => {
            const titleInput = document.getElementById("title")! as HTMLInputElement;
            const authorInput = document.getElementById("author")! as HTMLInputElement;
            const contentInput = document.getElementById("content")! as HTMLInputElement;

            const title = titleInput.value;
            const author = authorInput.value;
            const content = contentInput.value;

            if (!title && !author && !content) {
                alert("Empty inputs...");
                return;
            }
            //call create api
            const rawResponse = await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author, content })
            });

            const res: IBlog = await rawResponse.json();
            //add new row with js
            addNewRowWithJS(res);

            //close modal
            //@ts-ignore
            const modalBlog = bootstrap.Modal.getOrCreateInstance('#modalBlog', {
                keyboard: false
            })
            modalBlog.hide();

            //show toast
            //@ts-ignore
            const toast = new bootstrap.Toast("#createBlogToast")
            toast.show();

            //clear input
            titleInput.value = "";
            authorInput.value = "";
            contentInput.value = "";
        })
    }
}

fetchBlogs().then(() => {
    handleDeleteBlog();
    handleUpdateBlog();
});
handleCreateBlog();

actionSubmitModal();