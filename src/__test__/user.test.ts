import request from "supertest";
import express from "express";
import appInstance from "../app";

describe("API Integration Tests", () => {
  let app: express.Application;

  beforeAll(async () => {
    await appInstance.connection.connectDB();
    app = appInstance.getApp();
  });


  test("GET /getusers", async () => {
    const response = await request(app).get("/user/getusers");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  test("GET /getusers", async () => {
    const response = await request(app).get("/user/getusers?page=dwcwed&limit=dwd");

    expect(response.status).toBe(406);
    expect(response.body).toEqual(expect.any(Object));
  });

  test("GET /user/get/name", async () => {
    const response = await request(app).get("/user/get/John");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });

  test("GET /user/get/email", async () => {
    const response = await request(app).get("/user/getuser/john@gmail.com");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });

  test("POST /user/create", async () => {
    const user = {
      name: "Jonty",
      email: "jonty@gmail.com",
      phone: "99999999999",
      address: "Noida",
      password: "123455",
    };
    const response = await request(app).post("/user/register").send(user);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Registered Successfully",
    });
  });

  test("POST /user/login", async () => {
    const credential = { email: "somil@gmail.com", password: "4444" };
    const response = await request(app).post("/user/login").send(credential);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Login successful",
    });
  });


  test("DELETE /user/delete", async () => {
    const response = await request(app).delete("/user/delete/John");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "user has been deleted successfully",
    });
  });

  test("PATCH /user/delete", async () => {
    const response = await request(app).patch(
      "/user/update/6583fb1da24cda8fb1e53d21"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Data has been updated successfully!",
    });
  });


  test("POST /user/login", async () => {
    const credential = { email: "somil@gmail.com", password: "4445434" };
    const response = await request(app).post("/user/login").send(credential);

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      error: "Wrong credentials",
    });
  });

 
});
