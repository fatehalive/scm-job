import request from "supertest";
import app from "../app";

describe("GET /", () => {
  it('should respond with text "Success"', async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual("Success");
    expect(response.statusCode).toBe(200)
  });
});
