import express from "express";
import Controller from "./Controller";
import multer from "multer";
import authMiddleware from "../../middleware/authMiddleware";
const bRouter = express.Router();
const controller = new Controller();

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
bRouter.patch("/update/:title", controller.updateByTitle);

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
bRouter.get("/getbyid/:id", controller.getById);

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
bRouter.get("/getbycategories/:categories", controller.getByCategory);

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
bRouter.get("/search/:value", controller.search);

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
bRouter.delete("/:id", authMiddleware, controller.delete);

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

bRouter.patch("/updatebyid/:id", authMiddleware, controller.update);

const upload = multer({ dest: "uploads/" });

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
