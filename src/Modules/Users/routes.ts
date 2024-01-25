import express from "express";
import Controller from "./Controller";


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


router.post(
  "/register",
  // dynamicValidationMiddleware,
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
router.get("/get/:name", userController.getByName);



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
router.delete("/delete/:name", userController.deleteByName);
router.post("/login", userController.login);

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
router.patch("/update/:id", userController.update);

export default router;
