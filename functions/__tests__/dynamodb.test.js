import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { DynamoDbConfig } from "../src/config";
import { addItem } from "../src/helpers/dynamodb";

const ddb = new DocumentClient(DynamoDbConfig);
it("should insert item into table", async () => {
  await addItem();
  const { Item } = await ddb
    .get({ TableName: "files", Key: { id: "1" } })
    .promise();

  expect(Item).toEqual({
    id: "1",
    hello: "world",
  });
});
