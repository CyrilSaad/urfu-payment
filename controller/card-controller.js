const mongoose = require("mongoose");
const Card = require("../models/card");

exports.addCardPayment = (req, res) => {
  let item = new Card({
    cardHolder: req.body.cardHolder,
    cardNumber: req.body.cardNumber,
    expiryMonth: req.body.expiryMonth,
    expiryYear: req.body.expiryYear,
    cvc: req.body.cvc,
    email: req.body.email,
    amount: req.body.amount,
  });
  item.save();
  res.send("Card payment added!");
  console.log(res.body);
};

// Get payments sorted by a field specified in query params
export.getPayments = (req, res){
    let field = req.params.field;
    Card.find({}).sort(field).then(payments => res.send(payments));
}

exports.markUnsafe = (req, res) => {
  let id = mongoose.Types.ObjectId(req.body.id);
  Card.update({ _id: id }, { isSafe: false }, (err, data) => {
    if (err) console.log("An error has occured...", err);
    res.send("Marked as unsafe.");
  });
};
