import {FetchAndDrawTable, Push} from "./table.js"
import {process} from "./image.js"
let url = "https://i.kym-cdn.com/entries/icons/original/000/047/264/josh_hutcherson_whistle.jpg";
let file = "https://i.kym-cdn.com/entries/icons/original/000/047/264/josh_hutcherson_whistle.jpg";
document.addEventListener("DOMContentLoaded", ()=>{
    FetchAndDrawTable();
    content.scrollTop = content.scrollHeight;
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
    content.scrollTop = content.scrollHeight;
}

function Edit(textNode){
    console.log(textNode);
}

inputPicture.addEventListener("change", async ()=>{
    file = inputPicture.files[0];
    url = await process(file);
    console.log(url);
    previewPicture.style.backgroundImage = `url('${url}')`;
})

