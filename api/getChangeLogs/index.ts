import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest,  getChangeLogs: Document): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const output:ChangeLogs = {ChangeLog:getChangeLogs["ChangeLog"]};
    const responseMessage = output
        ? output
        : "Tasks are empty";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;