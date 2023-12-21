import { UpdateItem, UpdateLike } from "./api.js";
import { FetchAndDrawTable } from "./table.js";

export async function EditItem(item){
    let newComment = prompt("Please enter your new comment", item.Comment);
    const payload = {
        Id: item.Id,
        Comment: newComment
    }
    console.log(payload);
    await UpdateItem(payload);
    await FetchAndDrawTable();
}

export async function LikeItem(item){
    const payload = {
        Id: item.Id,
    }
    await UpdateLike(payload);
    await FetchAndDrawTable();
}