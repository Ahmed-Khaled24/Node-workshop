const { Router } = require("express");
const {
	getAllSecrets,
	addNewSecret,
	deleteSecretById,
} = require("../controllers/secrets.controller");
const authJWT = require("../middlewares/authJWT");
const secretsRouter = Router();

secretsRouter.get("/", authJWT, getAllSecrets);
secretsRouter.post("/", authJWT, addNewSecret);
secretsRouter.delete("/:secretId", authJWT, deleteSecretById);

module.exports = secretsRouter;
