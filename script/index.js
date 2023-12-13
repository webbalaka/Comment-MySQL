import {CreateItem} from "./api.js"
let butTag = document.createElement("button");


Fsub.addEventListener("submit", (e) => {
    e.preventDefault();
    const textNode = document.createTextNode(data.value);
    const divTag = document.createElement("div");
    divTag.className = "comment_row";
    const pTag = document.createElement("p");
    const divPTag = document.createElement("div");
    divPTag.className = "comment_content";
    butTag = document.createElement("button");
    butTag.innerHTML = "Edit";
    
    butTag.onclick = ()=>{
        Edit(textNode);
    };

    pTag.appendChild(textNode);
    divPTag.appendChild(pTag);
    divTag.appendChild(divPTag);
    divTag.appendChild(butTag);
    Content.appendChild(divTag);

    push(data.value);
    data.value = "";
})

function push(text){
    const payLoad = {
        Comment: text,
        Author: "USER1",
        UserId: "6633162221"
    }
    console.log(payLoad);
    CreateItem(payLoad);
}


function Edit(textNode){
    console.log(textNode);
}