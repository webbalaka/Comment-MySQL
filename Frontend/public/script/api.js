import {BACKEND_URL} from "./config.js"

export async function CreateItem(item){
    await fetch(`${BACKEND_URL}/submit`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(item)
    });
}

export async function UpdateItem(item){
    await fetch(`${BACKEND_URL}/update`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
}

export async function UpdateLike(item){
    await fetch(`${BACKEND_URL}/like`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
}

export async function GetItem(){
    const item = await fetch(`${BACKEND_URL}/get`).then((r) => r.json());
    return item;
}





