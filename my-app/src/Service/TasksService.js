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


export async function updateTasks(tasks) {
    console.log("Posting tasks: "+tasks)
    const response = await fetch(url+`/api/putTasks`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id:"1",tasks})
    })
    return await response.json();
}