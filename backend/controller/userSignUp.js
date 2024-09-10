const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Store hash in your password DB.

async function userSignUpController(req, res) {
  try {
    const { email, name, phone, address, password } = req.body;

    console.log("req.body", req.body);

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }
    if (!phone) {
      throw new Error("Please provide phone");
    }
    if (!address) {
      throw new Error("Please provide address");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPasssword = await bcrypt.hashSync(password, salt);

    if (!hashPasssword) {
      throw new Error("Somthing is wrong");
    }

    const payload = {
      ...req.body,
      password: hashPasssword,
    };

    const userData = new userModel(req.body);
    const saveUser = userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created successfully",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
