const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/User/userSignUp");
const userSignInController = require("../controller/User/userSignIn");
const userDetailsController = require("../controller/User/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/User/userLogout");
const allUsers = require("../controller/User/allUsers");
const updateUser = require("../controller/User/updateUser");
const UploadProductController = require("../controller/Product/uploadProduct");
const getProductController = require("../controller/Product/getProduct");
const updateProductController = require("../controller/Product/updateProduct");
const UploadTableController = require("../controller/Table/uploadTable");
const getTableController = require("../controller/Table/getTable");
const updateTableController = require("../controller/Table/updateTable");
const getCategoryProduct = require("../controller/Product/getCategoryProduct");
const getTypeTable = require("../controller/Table/getTypeTable");
const getAreaTable = require("../controller/Table/getAreaTable");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//admin
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//product
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
//category - product
router.get("/get-categoryProduct", getCategoryProduct);


//table
router.post("/upload-table", authToken, UploadTableController);
router.get("/get-table", getTableController);
router.post("/update-table", authToken, updateTableController);
//type - table
router.get("/get-typeTable", getTypeTable);
//area - table
router.get("/get-areaTable", getAreaTable);

module.exports = router;
