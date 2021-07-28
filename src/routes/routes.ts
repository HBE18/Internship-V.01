import  "../controller/controller"
import express from "express";
import * as control from "../controller/controller";
import * as mid from "../middleware/middleware"
const userRouter = express.Router();

userRouter
.route("/users")
.get(control.listUsers)
.post(control.createUser)//mid.validateSameEmailDoesntExist,


userRouter
.route("/users/:userId")
.get(mid.validateUserExists,mid.extractUserId,control.getUserById)
.patch(mid.validatePatchEmail,control.patch)
.delete(mid.validateUserExists,control.removeUser)

export default userRouter;
module.exports = userRouter;