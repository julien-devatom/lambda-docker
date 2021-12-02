import { ethers } from "ethers";
jest.mock("ethers", () => {
  const originalModule = jest.requireActual("ethers");
  console.log(originalModule);
  return {
    __esModule: true,
    ...originalModule,
    ethers: {
      ...originalModule.ethers,
      providers: {
        ...originalModule.ethers.providers,
        InfuraProvider: {
          getWebSocketProvider: jest.fn((network, apiKey) => apiKey),
        },
      },
    },
  };
});
test("Expect instanciate Infura provider without throwing errors", () => {
  const provider = ethers.providers.InfuraProvider.getWebSocketProvider(
    3,
    "INFURA_API_KEY"
  );
  expect(provider).toBe("INFURA_API_KEY");
});
