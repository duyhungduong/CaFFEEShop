const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/userSignUp");
const userSignInController = require("../controller/userSignIn");
const userDetailsController = require("../controller/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");
const updateUser = require("../controller/updateUser");
const UploadProductController = require("../controller/uploadProduct");
const getProductController = require("../controller/getProduct");
const updateProductController = require("../controller/updateProduct");
const UploadTableController = require("../controller/uploadTable");
const getTableController = require("../controller/getTable");
const updateTableController = require("../controller/updateTable");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//admin
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//product
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController)
router.post("/update-product", authToken,updateProductController)

//table
router.post("/upload-table", authToken, UploadTableController)
router.get("/get-table", getTableController)
router.post("/update-table", authToken,updateTableController )

module.exports = router;
