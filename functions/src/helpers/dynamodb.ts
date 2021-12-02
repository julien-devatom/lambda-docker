import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { DynamoDbConfig } from "../config";

const ddb = new DocumentClient(DynamoDbConfig);

export async function addItem() {
  await ddb
    .put({ TableName: "files", Item: { id: "1", hello: "world" } })
    .promise();
}
