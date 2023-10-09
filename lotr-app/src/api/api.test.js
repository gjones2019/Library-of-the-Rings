/* eslint-disable no-unused-expressions */
import axios from "axios";
import LOTRApi from "./api";

jest.mock("axios");

describe("LOTR API", () => {
  it("should set the base URL and authorization token", () => {
    const mockApiUrl = "https://example.com/api";
    const mockApiToken = "mock-token";

    process.env.REACT_APP_API_URL = mockApiUrl;
    process.env.REACT_APP_API_TOKEN = mockApiToken;

    const axiosCreateMock = jest.spyOn(axios, "create");

    LOTRApi("/");

    expect(axiosCreateMock).toHaveBeenCalledWith({
      baseURL: mockApiUrl,
    });

    delete process.env.REACT_APP_API_URL;
    delete process.env.REACT_APP_API_TOKEN;
  });

  it("should set the authorization header with the token", () => {
    const mockApiToken = "mock-token";

    process.env.REACT_APP_API_TOKEN = mockApiToken;

    const axiosInterceptorsMock = {
      request: jest.fn(),
    };
    axios.interceptors = axiosInterceptorsMock;

    LOTRApi("/");

    expect(axiosInterceptorsMock.request).toHaveBeenCalledWith(
      expect.any(Function)
    );

    const axiosRequestConfig = {
      headers: {},
    };

    axiosInterceptorsMock.request.mock.calls[0][0](axiosRequestConfig);

    expect(axiosRequestConfig.headers.Authorization).toBe(
      `Bearer ${mockApiToken}`
    );

    delete process.env.REACT_APP_API_TOKEN;
  });
});
