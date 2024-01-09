import request from "supertest";
import express from "express";
import appInstance from "../app";
import fs from "fs";

describe("API Integration Tests", () => {
  let app: express.Application;

  beforeAll(async () => {
    await appInstance.connection.connectDB();
    app = appInstance.getApp();
  });

  afterEach(async () => {
    await appInstance.connection.connectDB();
  });

  test("GET /blogs/get", async () => {
    const response = await request(app).get("/blogs/get?page=3&limit=2");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Data fetched Successfully",
      data: expect.any(Array),
    });
  });

  test("GET /blogs/search", async () => {
    const response = await request(app).get(
      "/blogs/search/sports?page=1&limit=2"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Blogs fetched Successfully",
      data: expect.any(Array),
    });
  });

  test("GET /blogs/search", async () => {
    appInstance.connection.disconnectDB();
    const response = await request(app).get(
      "/blogs/search/sports?page=1&limit=2"
    );
    expect(response.body).toEqual(expect.any(Object));
  });

  test("GET /blogs/getbyid", async () => {
    const response = await request(app).get(
      "/blogs/getbyid/6597dc544dd9b75f8929f933"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Blogs fetched Successfully",
      data: expect.any(Object),
    });
  });

  test("GET /blogs/getbyid", async () => {
    const response = await request(app).get(
      "/blogs/getbyid/659ab89466e703d683adewssa2510f"
    );
    console.log(response);
    expect(response.body).toEqual({
      status: 406,
      message: "Blogs Not Found",
      error: expect.any(Object),
    });
  });

  test("GET /blogs/getbycategories", async () => {
    const response = await request(app).get(
      "/blogs/getbycategories/travel?page=1&limit=1"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Blogs fetched Successfully",
      data: expect.any(Array),
    });
  });

  test("GET /blogs/getbycategories", async () => {
    appInstance.connection.disconnectDB();

    const response = await request(app).get(
      "/blogs/getbycategories/travel?page=1&limit=1"
    );
    expect(response.body).toEqual(expect.any(Object));
  });

  test("POST /blogs/create", async () => {
    const blog = {
      approved: "true",
      "body.description": "gcrd",
      categories: "study",
      imageUrl: "GTVDGTHHBJ",
      isSensitive: "true",
      likes: 23,
      tags: "dexeddexd",
      title: "fcxtghycxbghb",
      "writer.email": "xdfzedfced",
      "writer.id": 2,
      "writer.name": "xedfxfxed",
      "writer.profilePicUrl": "szewdxedxf",
    };
    const response = await request(app).post("/blogs/create").send(blog);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Blog Created Successfully",
      data: {},
    });
  });


  test("POST /blogs/create", async () => {
    const blog = {
      approved: "true",
      "body.description": "gcrd",
      categories: "ncdecekfcncfe",
      imageUrl: "GTVDGTHHBJ",
      isSensitive: "true",
      likes: 23,
      tags: "dexeddexd",
      title: "fcxtghycxbghb",
      "writer.email": "xdfzedfced",
      "writer.id": 2,
      "writer.name": "xedfxfxed",
      "writer.profilePicUrl": "szewdxedxf",
    };
    const response = await request(app).post("/blogs/create").send(blog);

    expect(response.status).toBe(406);
    expect(response.body).toEqual(expect.any(Object)
      );
  });



  test("PATCH /blogs/update", async () => {
    const blog = {
      categories: "lifestyle",
    };
    const response = await request(app)
      .patch("/blogs/update/Maniac")
      .send(blog);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Updated Successfully",
      data: {},
    });
  });

  test("DELETE /blogs/delete", async () => {
    const response = await request(app).delete(
      "/blogs/657996685aac962f3ce613c8"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Blog Deleted Successfully",
      data: {},
    });
  });

  test("PATCH /blogs/update", async () => {
    const blog = {
      categories: "sports",
    };
    const response = await request(app)
      .patch("/blogs/updatebyid/6583fb1da24cda8fb1e53d21")
      .send(blog);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Updated Successfully",
      data: {},
    });
  });

  test("GET /blogs/bulk-uploads-list", async () => {
    const response = await request(app).get("/blogs/bulk-uploads-list");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Data fetched Successfully",
      data: expect.any(Object),
    });
  });

  test("GET /blogs/bulk-uploads-list", async () => {
    appInstance.connection.disconnectDB();
    const response = await request(app).get("/blogs/bulk-uploads-list");

    expect(response.body).toEqual(expect.any(Object));
  });

  test("GET /blogs/bulk-uploads-errors", async () => {
    const response = await request(app).get(
      "/blogs/bulk-uploads-errors/2ed49b46-26d0-4e02-ac39-aeeb6849e8cd"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Data fetched Successfully",
      data: expect.any(Object),
    });
  });

  test("GET /blogs/bulk-uploads-errors", async () => {
    appInstance.connection.disconnectDB();
    const response = await request(app).get(
      "/blogs/bulk-uploads-errors/2ed49b46-26d0-4e02-ac39-aeeb6849e8cd"
    );
    expect(response.body).toEqual(expect.any(Object));
  });

  test("DELETE /blogs/bulk-uploads-list/delete", async () => {
    const response = await request(app).delete(
      "/blogs/bulk-uploads-list/delete"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "all bulk errors deleted successfully",
    });
  });

  test("POST /bulk-upload", async () => {
    const fileContent = fs.readFileSync("blog.csv");
    const response = await request(app)
      .post("/blogs/bulk-upload")
      .attach("file", fileContent, "blog.csv");
    expect(response.status).toBe(200);
  });

});