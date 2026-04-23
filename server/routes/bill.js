const router = require("express").Router();
const Bill = require("../models/Bill");
const auth = require("../middleware/auth");

// ➕ Create Bill
router.post("/", auth, async (req, res) => {
  const bill = new Bill({
    userId: req.user.id,
    customer: req.body.customer,
    amount: req.body.amount
  });

  await bill.save();
  res.json(bill);
});

// 📄 Get Bills
router.get("/", auth, async (req, res) => {
  const bills = await Bill.find({ userId: req.user.id });
  res.json(bills);
});

// ❌ Delete Bill
router.delete("/:id", auth, async (req, res) => {
  await Bill.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;