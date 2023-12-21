export async function process(file, min_image_size = 300){
    const encoded = await img_to_base64(file);
    if(encoded){
        const old_size = calculate_size(encoded);
        console.log(old_size);
        if(old_size > min_image_size){
            const resized = await reduce_image_size(encoded);
            console.log(calculate_size(resized));
            return resized;
        }
        else return encoded;
    }
}

async function img_to_base64(file){
    return  new Promise( (resolve, reject)=>{
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            // url = reader.result;
            resolve(reader.result);
        })
        reader.addEventListener("error", (err)=>{
            console.log(err);
            reject(err);
        })
        reader.readAsDataURL(file)
    })
}

function calculate_size(file){
    let y = 1;
    if (file.endsWith('==')){
        y = 2;
    }
    const x_size = (file.length * (3/4)) - y;
    return Math.round(x_size / 1024);
}


async function reduce_image_size(encoded, maxWidth = 450, maxHeight = 450){
    return await new Promise((resolve)=>{
        const img = new Image();
        img.src = encoded;
        img.onload = () =>{
            const canvas = document.createElement("canvas");
            let width = img.width;
            let height = img.height;

            if(width > height){
                if(width > maxHeight){
                    height *= maxHeight / width;
                    width = maxWidth;
                }
            } else {
                if(height > maxWidth){
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL());
        }
    })
}
