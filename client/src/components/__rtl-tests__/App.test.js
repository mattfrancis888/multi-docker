//import App from "components/App";
import { MemoryRouter } from "react-router";
import Routes from "components/Routes";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import waitForExpect from "wait-for-expect";
import {
    render,
    cleanup,
    RenderResult,
    fireEvent,
} from "@testing-library/react";
import nock from "nock";
let app;
let scope;
afterEach(cleanup);
beforeEach(async () => {
    app = render(
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
            <Routes />
        </MemoryRouter>
    );
});
test("Show Loading And Categories", async () => {
    expect(app.getByTestId("loading")).toBeInTheDocument();

    let mockData = [
        "Electronics",
        "Furniture",
        "Bikes",
        "Sportings Goods",
        "Audio",
        "Books",
        "Clothing",
        "Video Games And Consoles",
    ];
    scope = nock("https://multi-docker-backend.vercel.app/")
        .get("/category")
        .reply(200, mockData, { "Access-Control-Allow-Origin": "*" });

    await waitForExpect(() => {
        if (!scope.isDone()) {
            console.error("pending mocks: %j", scope.pendingMocks());
        }
        expect(scope.isDone()).toBe(true);
        expect(app.getByText("Electronics")).toBeInTheDocument();
    });
}, 30000);
