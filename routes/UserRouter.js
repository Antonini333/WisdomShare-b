const router = require ("express").Router();
const UserController = require("../controllers/UserController");

router.post('/user/register', UserController.Register);

module.exports = router;