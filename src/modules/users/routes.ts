import express from "express";
import Controller from "./Controller";
import paramValidationMiddleware from "../../middleware/paramValidationMiddleware";
import dynamicValidationMiddleware from "../../middleware/dynamicValidationMiddleware";
import StringParamValidationMiddleware from "../../middleware/checkStringParams";

const router = express.Router();

const userController = new Controller();

/**
 * @swagger
 * /user/getusers:
 *    get:
 *      tags:
 *        - get all users
 *      summary: Return all users
 *      responses:
 *        '200':
 *          description: A list of users
 */

router.get("/getusers", userController.getAllUsers);

/**
 * @swagger
 * /user/register:
 *     post:
 *       tags:
 *         - "Create a user"
 *       summary: Create a new user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the user
 *                 email:
 *                   type: string
 *                   description: The email of the user
 *                 password:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 address:
 *                   type: string
 *       responses:
 *         '201':
 *           description: User created successfully
 *         '406':
 *           description: Error occured
 *         '500':
 *           description: Internal Server Error`
 */

router.post(
  "/register",
  dynamicValidationMiddleware,
  userController.createUser
);

/**
 * @swagger
 * /user/get/{name}:
 *   get:
 *     tags:
 *       - "Get User by name"
 *     summary: Returns user.
 *     description: Retrieves a user matched to that name.
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "Somil"
 *     responses:
 *       '200':
 *         description: User retrieved successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
router.get(
  "/get/:name",
  StringParamValidationMiddleware.checkStringParams("name"),
  userController.getByName
);

/**
 * @swagger
 * /user/getuser/{email}:
 *   get:
 *     tags:
 *       - "Get User by email"
 *     summary: Returns user.
 *     description: Retrieves a user matched to that email.
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "somil@gmail.com"
 *     responses:
 *       '200':
 *         description: User retrieved successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
router.get("/getuser/:email", userController.getByEmail);

/**
 * @swagger
 * /user/delete/{name}:
 *   delete:
 *     tags:
 *       - "Delete user by name"
 *     summary: Delete user.
 *     description: Delete a user matched to that name.
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "Somil"
 *     responses:
 *       '200':
 *         description: User deleted successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
router.delete(
  "/delete/:name",
  StringParamValidationMiddleware.checkStringParams("name"),
  userController.deleteByName
);

/**
 * @swagger
 * /user/login:
 *     post:
 *       tags:
 *         - "Login a user"
 *       summary: Login a  user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: The email of the user
 *                 password:
 *                   type: string
 *       responses:
 *         '201':
 *           description: User login successfully
 *         '406':
 *           description: Error occured
 *         '500':
 *           description: Internal Server Error`
 */

router.post("/login", dynamicValidationMiddleware, userController.login);

/**
 * @swagger
 * /user/update/{id}:
 *   patch:
 *     tags:
 *       - "Update user by id"
 *     summary: Updates user.
 *     description: Updates a user matched to that id.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "6595463a2b443e8b56c65281"
 *       - name: name
 *         in: body
 *         required: true
 *         description: Parameter description in CommonMark or HTML.
 *         schema:
 *           type: string
 *           example: "John"
 *     responses:
 *       '200':
 *         description: User Updated successfully.
 *       '404':
 *         description: Not found.
 *       '500':
 *         description: Internal server error.
 */
router.patch("/update/:id", paramValidationMiddleware, userController.update);

export default router;
