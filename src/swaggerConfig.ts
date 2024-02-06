import swaggerJsdoc from "swagger-jsdoc";

//eslint-disable-next-line
const options: any = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for your Node.js app",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      },
    },
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
  },
  apis: ["src/**/*.ts"],
};
//eslint-disable-next-line
const swaggerSpec: any = swaggerJsdoc(options);

export default swaggerSpec;
