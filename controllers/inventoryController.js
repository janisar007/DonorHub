const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");

const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found!");
    }

    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("Not a donar account");
    }

    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a hospital account");
    }

    // save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    res.status(201).send({
      success: true,
      message: "New Blood Record added",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error In Create Inventory API",
      error,
    });
  }
};

const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organisation: req.body.userId,
      })
      .populate("donar")
      .populate("organisation")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "retrieved all records successfully",
      inventory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error In get Inventory API",
      error,
    });
  }
};

module.exports = { createInventoryController, getInventoryController };
