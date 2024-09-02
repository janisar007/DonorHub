const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");

const createInventoryController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      // throw new Error("User not found!");
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    if (req.body.inventoryType == "out") {
      if (user.role !== "hospital") {
        return res.status(404).send({
          success: false,
          message: "Not a hospital account",
        });
      }

      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantity = req.body.quantity;
      const organisation = new mongoose.Types.ObjectId(req.body.userId);
      //calculate blood quantity
      const totalInOfRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const totalIn = totalInOfRequestedBloodGroup[0]?.total || 0;

      //Calculate out blood quantity

      const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);

      const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;

      // In & Out Calculation
      const availableQuantityOfBloodGroup = totalIn - totalOut;

      // If empty
      if (availableQuantityOfBloodGroup === 0) {
        return res.status(500).send({
          success: false,
          message: `Currently ${requestedBloodGroup.toUpperCase()} blood is not available`,
        });
      }
      //quantity validation
      if (availableQuantityOfBloodGroup < requestedQuantity) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuantityOfBloodGroup}ml of ${requestedBloodGroup.toUpperCase()} is available`,
        });
      }
      req.body.hospital = user?._id;
    } else {
      if (user.role !== "donar") {
        return res.status(404).send({
          success: false,
          message: "Not a donar account",
        });
      }
      req.body.donar = user?._id;
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
      message: "Error in Create Inventory API",
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
