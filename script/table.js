import {CreateItem, GetItem} from "./api.js";
let editBTag = document.createElement("button");
let likeBTag = document.createElement("button");

export async function FetchAndDrawTable(){
    const item = await GetItem();
    DrawTable(item);
}

function DrawTable(items){
    content.innerHTML = "";
    for(const item of items){
        console.log(item);
        console.log(item.Picture);
        var comment_row = document.createElement("div");
        var comment_content = document.createElement("div");
        var userDetail = document.createElement("div");
        var userProfile = document.createElement("div");
        var userName = document.createElement("div");
        var uploadTime = document.createElement("div");
        var but = document.createElement("div");
        var react = document.createElement("div");

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
        userProfile_imgTag.src = item.Picture;
        const userName_pTag = document.createElement("p");
        userName_pTag.innerHTML = item.Author;
        const uploadTime_pTag = document.createElement("p");
        uploadTime_pTag.innerHTML = CalculateTime(item.UpdateAt);
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

function CalculateTime(dataString){
    const date = dataString.replace("T", " ");
    const oldTime = new Date(date);
    const nowTime = new Date();
    const dist = nowTime - oldTime;
    const seconds = dist / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    let value = seconds;
    let unit = "second"
    if(weeks >= 1){
        value = f(weeks);
        unit = "week";
    } else if(days >= 1){
        value = f(days);
        unit = "day";
    } else if(hours >= 1){
        value = f(hours);
        unit = "hour";
    } else if(minutes){
        value = f(minutes);
        unit = "minute";
    }
    if(value > 1 ) unit += "s";
    unit += " ago"
    return value + " " + unit;
}

function f (num){
    return Math.floor(num);
}

export async function Push(text, Author, UserId, url){
    const payLoad = {
        Comment: text,
        Author: Author,
        UserId: UserId,
        Picture: url
    }
    // console.log(payLoad);
    await CreateItem(payLoad);
    await FetchAndDrawTable();
}