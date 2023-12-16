import {FetchAndDrawTable, Push} from "./table.js"

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

function Edit(textNode){
    console.log(textNode);
}

InputPicture.addEventListener("change", ()=>{
    var url = URL.createObjectURL(InputPicture.files[0]);
    previewPicture.src = url;
    console.log(url);
})

  