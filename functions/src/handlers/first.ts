import { addItem } from "../helpers/dynamodb";

export async function handler() {
  const response: string = "Hello World";
  await addItem();
  console.info(response);
  return response;
}
