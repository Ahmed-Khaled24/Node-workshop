const { Router } = require("express");
const {
	getAllSecrets,
	addNewSecret,
	deleteSecretById,
} = require("../controllers/secrets.controller");
const authJWT = require("../middlewares/authJWT");
const secretsRouter = Router();

secretsRouter.get("/", authJWT, getAllSecrets);
secretsRouter.post("/", addNewSecret);
secretsRouter.delete("/:secretId", deleteSecretById);

module.exports = secretsRouter;
