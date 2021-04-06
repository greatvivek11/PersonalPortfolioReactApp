var url = ``;
var t_id, t_pk, cl_id = 2, cl_pk = 2;

if (process.env.NODE_ENV == "development") {
    url = `http://localhost:7071`;
    t_id = "3";
    t_pk = "3";
}
if (process.env.NODE_ENV == "production") {
    url = ``;
    t_id = "1";
    t_pk = "1";
}
export async function getTasks() {
    console.log("fetchings tasks using getTasks")
    return await fetch(url + `/api/getTasks?id=${t_id}&partitionKeyValue=${t_pk}`)
        .then(res => res.json());
}

export async function getBlobs() {
    console.log("fetchings blobs to load resources from blob storage")
    return await fetch(url + `/api/getResources`)
        .then(res => res.json(res));
}

export async function getChangeLogs() {
    console.log("fetchings changeLogs from cosmosDB")
    return await fetch(url + `/api/getChangeLogs?id=${cl_id}&partitionKeyValue=${cl_pk}`)
        .then(res => res.json(res));

}

// export async function getBlogs() {
//     console.log("fetchings blogs from my wordpress")
//     return await apiFetch( { path: "https://vivekkaushikblog.wordpress.com" } ).then( posts => {
//         console.log( posts );
//     } )
//     .then(res => res.json(res))

// }

export async function updateTasks(tasks) {
    console.log("Posting tasks");
    const response = await fetch(url + `/api/putTasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: t_id, tasks: tasks })
    })
    return await response.json();
}