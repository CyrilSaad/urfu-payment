var express = require("express");
var router = express.Router();
var cardRouter = require("./cardRoute.js");
var control = require("../controller/card-controller");
var cardValidator = require("../models/card-validator");
const url = "mongodb://localhost:27017/acme";
const validate = require("express-validation");

router.post(
  "/addCardPayment",
  validate(cardValidator.addPayment),
  (req, res) => {
    control.addCardPayment(req, res);
  }
);

//getPayment, this will take a query variable by which it will sort the payments
router.get(
  "/getPayments:field",
  validate(cardValidator.getPayments),
  (req, res) => {
    control.getPayments(req, res);
  }
);

router.put("/markUnsafe", validate(cardValidator.markUnsafe), (req, res) => {
  control.markUnsafe(req, res);
});
router.put("/updatePayment");
