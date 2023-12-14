import {CreateItem, GetItem} from "./api.js"
let butTag = document.createElement("button");

document.addEventListener("DOMContentLoaded", ()=>{
    FetchAndDrawTable();
})



async function FetchAndDrawTable(){
    const item = await GetItem();
    DrawTable(item);
}

function DrawTable(item){
    Content.innerHTML = "";
    for(const items of item){
        console.log(items);
        const textNode = document.createTextNode(items.Comment);
        const divTag = document.createElement("div");
        divTag.className = "comment_row";
        const pTag = document.createElement("p");
        const divPTag = document.createElement("div");
        divPTag.className = "comment_content";
        butTag = document.createElement("button");
        butTag.innerHTML = "Edit";
        
        butTag.onclick = ()=>{
            Edit(items.Comment);
        };

        pTag.appendChild(textNode);
        divPTag.appendChild(pTag);
        divTag.appendChild(divPTag);
        divTag.appendChild(butTag);
        Content.appendChild(divTag);
    }
}

 Fsub.addEventListener("submit", async (e) => {
    e.preventDefault();
    await Push(data.value)
    data.value = "";
})

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