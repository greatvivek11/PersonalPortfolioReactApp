import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const tasks:Tasks = context.bindings.tasksBlob;
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: tasks
    };

};

export default httpTrigger;