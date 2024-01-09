import request from "supertest";
import express from "express";
import appInstance from "../app";

describe("API Integration Tests", () => {
  let app: express.Application;

  beforeAll(async () => {
    await appInstance.connection.connectDB();
    app = appInstance.getApp();
  });

  test("POST /data/post", async () => {
    const user = {
      username: "rytuytg",
      email: "Sol@gmail.com",
      password: "4355",
    };
    const response = await request(app).post("/data/post").send(user);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  test("POST /data/login", async () => {
    const user = {
      username: "somil123",
    };
    const response = await request(app).post("/data/login").send(user);

    expect(response.status).toBe(200);
    expect(response.body).toEqual("User Authorised");
  });

  test("GET /data/get", async () => {
    const response = await request(app)
      .get("/data/get");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  test("GET /data/async", async () => {
    jest.setTimeout(3000);

    try {
      const response = await request(app).get("/data/async");
      expect(response.status).toBe(200);
    } catch (error) {
      expect(error).toMatch("Time Exceeds");
    }
  });

  test("POST /data/register", async () => {
    const user = {
      "name": "Somil",
      "email": "somil@123.com",
      "password": "123452312",
      "phone": "98762372832",
      "address": "Noida"
  };
    const response = await request(app).post("/data/register").send(user);

    expect(response.status).toBe(200);
    expect(response.body).toEqual("Registered Successfully");
  });

});
