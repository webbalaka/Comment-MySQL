import {FetchAndDrawTable, Push} from "./table.js"
import {process} from "./image.js"
let url = "https://miro.medium.com/v2/resize:fit:450/1*9dbWWY4LzLIkjEHvDf4bDQ.jpeg";
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
    await Push(userMsg.value, inputUsername.value, inputUserId.value, url);
    userMsg.value = "";
}

function Edit(textNode){
    console.log(textNode);
}

inputPicture.addEventListener("change", async ()=>{
    const file = inputPicture.files[0];
    url = await process(file);
    previewPicture.src = url;
})

