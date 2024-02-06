import express from "express";
import Controller from "./Controller";
import multer from "multer";
import authMiddleware from "../../middleware/authMiddleware";
import paramValidationMiddleware from "../../middleware/paramValidationMiddleware";
const bRouter = express.Router();
const controller = new Controller();
import StringParamValidationMiddleware from "../../middleware/checkStringParams";

/**
 * @swagger
 * /blogs/get:
 *    get:
 *      tags:
 *        - get all blogs
 *      summary: Return all blogs
 *      responses:
 *        '200':
 *          description: A list of blogs
 */

bRouter.get("/get", controller.getAll);

/**
 * @swagger
 * /blogs/create:
 *     post:
 *       tags:
 *         - "Create a blog"
 *       summary: Create a new blog
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: The title of the blog
 *                 categories:
 *                   type: string
 *                   enum:
 *                     - travel
 *                     - study
 *                     - fitness
 *                     - lifestyle
 *                     - sports
 *                   description: The category of the blog
 *                 body:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                       description: The description of the blog
 *                 approved:
 *                   type: boolean
 *                 isSensitive:
 *                   type: boolean
 *       responses:
 *         '201':
 *           description: Blog created successfully
 *         '401':
 *           description: Unauthorized Request
 *         '500':
 *           description: Internal Server Error`
 */
bRouter.post("/create", authMiddleware, controller.create);

/**
 * @swagger
 * /blogs/update/{title}:
 *   patch:
 *     tags:
 *       - "Update Blogs by title"
 *     summary: Updates blog.
 *     description: Updates a blogs matched to that title.
 *     parameters:
 *       - name: title
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "sympathetically"
 *       - name: categories
 *         in: body
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "sports"
 *     responses:
 *       '200':
 *         description: Blog Updated successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
bRouter.patch(
  "/update/:title",
  StringParamValidationMiddleware.checkStringParams("title"),
  controller.updateByTitle
);

/**
 * @swagger
 * /blogs/getbyid/{id}:
 *   get:
 *     tags:
 *       - "Get Blogs by id"
 *     summary: Returns blog.
 *     description: Retrieves a blogs matched to that id.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "65967c6e0f66363ac00c4468"
 *     responses:
 *       '200':
 *         description: Blog retrieved successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
bRouter.get("/getbyid/:id", paramValidationMiddleware, controller.getById);

/**
 * @swagger
 * /blogs/getbycategories/{categories}:
 *   get:
 *     tags:
 *       - "Get Blogs by categories"
 *     summary: Returns blog.
 *     description: Retrieves a blogs matched to that category.
 *     parameters:
 *       - name: categories
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "65967c6e0f66363ac00c4468"
 *     responses:
 *       '200':
 *         description: Blog retrieved successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
bRouter.get(
  "/getbycategories/:categories",
  StringParamValidationMiddleware.checkStringParams("categories"),
  controller.getByCategory
);

/**
 * @swagger
 * /blogs/search/{value}:
 *   get:
 *     tags:
 *       - "Get Blogs by search query"
 *     summary: Returns blogs.
 *     description: Retrieves a blogs matched to that search query.
 *     parameters:
 *       - name: value
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "lifestyle"
 *     responses:
 *       '200':
 *         description: Blog retrieved successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
bRouter.get(
  "/search/:value",
  StringParamValidationMiddleware.checkStringParams("value"),
  controller.search
);

/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     tags:
 *       - "Delete Blogs by id"
 *     summary: Delete blog.
 *     description: Delete a blogs matched to that id.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "65967c6e0f66363ac00c4468"
 *     responses:
 *       '200':
 *         description: Blog deleted successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
bRouter.delete(
  "/:id",
  paramValidationMiddleware,
  authMiddleware,
  controller.delete
);

/**
 * @swagger
 * /blogs/updatebyid/{id}:
 *   patch:
 *     tags:
 *       - "Update Blogs by id"
 *     summary: Updates blog.
 *     description: Updates a blogs matched to that id.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "65967c6e0f66363ac00c4468"
 *       - name: categories
 *         in: body
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "sports"
 *     responses:
 *       '200':
 *         description: Blog Updated successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */

bRouter.patch(
  "/updatebyid/:id",
  paramValidationMiddleware,
  authMiddleware,
  controller.update
);

const upload = multer({ dest: "uploads/" });

/**
 * @swagger
 * /blogs/bulk-upload:
 *     post:
 *       tags:
 *         - "Bulk upload a blog"
 *       summary: Create a new blogs
 *       requestBody:
 *        required: true
 *        content:
 *         multipart/form-data:
 *          schema:
 *           type: object
 *           properties:
 *            file:
 *             type: string
 *             format: binary
 *       responses:
 *        '201':
 *          description: Blog created successfully
 *        '401':
 *          description: Unauthorized Request
 *        '500':
 *          description: Internal Server Error`
 */

bRouter.post(
  "/bulk-upload",
  authMiddleware,
  upload.single("file"),
  controller.bulkUpload
);

/**
 * @swagger
 * /blogs/bulk-uploads-list:
 *    get:
 *      tags:
 *        - get bulk-uploads-list
 *      summary: Return bulk-uploads-list
 *      responses:
 *        '200':
 *          description: A list of bulk-uploads
 */

bRouter.get("/bulk-uploads-list", controller.getAllBulkUploads);

/**
 * @swagger
 * /blogs/bulk-uploads-errors/{sessionId}:
 *    get:
 *      tags:
 *        - get bulk-uploads-errors
 *      summary: Return bulk-uploads-errors
 *      responses:
 *        '200':
 *          description: A list of bulk-uploads-errors
 */
bRouter.get(
  "/bulk-uploads-errors/:sessionId",
  controller.getBulkUploadErrorDetails
);

/**
 * @swagger
 * /blogs/bulk-uploads-list/delete:
 *   delete:
 *     tags:
 *       - "Delete bulk-uploads-list/delete"
 *     summary: Delete bulk-uploads-list/delete.
 *     description: Delete  bulk-uploads-list/delete.
 *     responses:
 *       '200':
 *         description: Blog deleted successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
bRouter.delete("/bulk-uploads-list/delete", controller.deleteBulkUploadErrors);

export default bRouter;
