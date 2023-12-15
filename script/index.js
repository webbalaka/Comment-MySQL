import {CreateItem, GetItem} from "./api.js"
let editBTag = document.createElement("button");
let likeBTag = document.createElement("button");

document.addEventListener("DOMContentLoaded", ()=>{
    FetchAndDrawTable();
})

userMsg.addEventListener("keydown", (event)=>{
    if(event.which === 13 && !event.shiftKey){
        submit(event)
        event.preventDefault();

    }
})

Fsub.addEventListener("submit", (event)=>{
    submit(event)
})

async function submit (event){
    event.preventDefault();
    await Push(userMsg.value)
    userMsg.value = "";
}


async function FetchAndDrawTable(){
    const item = await GetItem();
    DrawTable(item);
}

function DrawTable(items){
    content.innerHTML = "";
    for(const item of items){
        console.log(item);
  
        var comment_row = document.createElement("div");
        var comment_content = document.createElement("div");
        var userDetail = document.createElement("div");
        var userProfile = document.createElement("div");
        var userName = document.createElement("div");
        var uploadTime = document.createElement("div");
        var but = document.createElement("div");
        var react = document.createElement("div");

        const text = document.createTextNode(item.Comment);

        comment_row.className = "comment_row";
        comment_content.className = "comment_content";
        userDetail.className = "userDetail";
        userProfile.className = "userProfile";
        userName.className = "userName";
        uploadTime.className = "uploadTime";
        but.className = "but";
        react.className = "react";

        const comment_content_pTag = document.createElement("p");
        comment_content_pTag.innerHTML = item.Comment;
        const userProfile_imgTag = document.createElement("img");
        userProfile_imgTag.src = "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        const userName_pTag = document.createElement("p");
        userName_pTag.innerHTML = item.Author;
        const uploadTime_pTag = document.createElement("p");
        uploadTime_pTag.innerHTML = item.uploadTime;
        const react_pTag = document.createElement("p");
        react_pTag.innerHTML = "0";
        

        likeBTag = document.createElement("button");
        editBTag = document.createElement("button");
        likeBTag.innerHTML = "like";
        editBTag.innerHTML = "Edit";
        
        likeBTag.onclick = ()=>{
            Edit(item.Comment);
        };
        editBTag.onclick = ()=>{
            Edit(item.Comment);
        };

        comment_content.appendChild(comment_content_pTag);
        
        userProfile.appendChild(userProfile_imgTag);
        uploadTime.appendChild(uploadTime_pTag);
        userName.appendChild(userName_pTag);
        userName.appendChild(uploadTime);
        react.appendChild(react_pTag);
        react.appendChild(likeBTag);
        but.appendChild(react);
        but.appendChild(editBTag);
        userDetail.appendChild(userProfile);
        userDetail.appendChild(userName);
        userDetail.appendChild(but);
        comment_row.appendChild(comment_content);
        comment_row.appendChild(userDetail);
        content.appendChild(comment_row);
    }
}


async function Push(text){
    const payLoad = {
        Comment: text,
        Author: "USER1",
        UserId: "6633162221"
    }
    // console.log(payLoad);
    await CreateItem(payLoad);
    await FetchAndDrawTable();
}


function Edit(textNode){
    console.log(textNode);
}