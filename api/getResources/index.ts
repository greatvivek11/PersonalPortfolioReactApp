import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { ContainerClient, StorageSharedKeyCredential,BlobItem } from '@azure/storage-blob';

    const account = process.env.ACCOUNT_NAME;
    const accountKey = process.env.ACCOUNT_KEY;
    const containerName = `personalportfolioblobcontainer`;
    const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));

    const blobs = await getBlobsInContainer(sharedKeyCredential, containerName, account);

    const responseMessage = blobs

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
};

async function getBlobsInContainer(sharedKeyCredential: StorageSharedKeyCredential, containerName: string, account: string) {
    const returnedBlobUrls: string[] = [];

    const containerClient = new ContainerClient(
        `https://${account}.blob.core.windows.net/${containerName}`,
        sharedKeyCredential
    );

    for await (const blob of containerClient.listBlobsFlat()) {
        // console.log(blob.name);
        // if image is public, just construct URL
        returnedBlobUrls.push(
          `https://${account}.blob.core.windows.net/${containerName}/${blob.name}`
        );
      }
    
      return returnedBlobUrls;
}

export default httpTrigger;