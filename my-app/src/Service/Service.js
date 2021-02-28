var url=``;
if(process.env.NODE_ENV == "development") {
    url = `http://localhost:7071`;
}
if(process.env.NODE_ENV == "production") {
    url = ``;
}
export async function getTasks(id,pk) {
    console.log("fetchings tasks using getTasks")
    return await fetch(url+`/api/getTasks?id=${id}&partitionKeyValue=${pk}`)
    .then(res => res.json());
}

export async function getBlobs() {
    console.log("fetchings blobs to load resources from blob storage")
    return await fetch(url+`/api/getResources`)
    .then(res => res.json(res));
}

export async function getStrings(link) {
    console.log("fetchings strings.txt from blob storage")
    return await fetch(link)
    .then(res => res.json(res))

}

// export async function getBlogs() {
//     console.log("fetchings blogs from my wordpress")
//     return await apiFetch( { path: "https://vivekkaushikblog.wordpress.com" } ).then( posts => {
//         console.log( posts );
//     } )
//     .then(res => res.json(res))

// }

export async function updateTasks(tasks) {
    console.log("Posting tasks")
    const response = await fetch(url+`/api/putTasks`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id:"1",tasks:tasks})
    })
    return await response.json();
}