export const isTest = process.env.JEST_WORKER_ID;
export const devMode = process.env.DEV || false;
export const DynamoDbConfig = {
  convertEmptyValues: true,
  ...(isTest && {
    endpoint: "localhost:8000",
    sslEnabled: false,
    region: "local-env",
  }),
};
