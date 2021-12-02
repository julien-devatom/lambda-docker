import { handler } from "../src";

test("Expect return helloworld", async () => {
  const result = await handler();
  expect(result).toBe("Hello World");
});
