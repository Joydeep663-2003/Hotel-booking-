import Promo from "../models/Promo.js";

export const validatePromo = async (req, res) => {
  try {
    const { code, total } = req.body;
    const promo = await Promo.findOne({ code: code.toUpperCase() });
    if (!promo) return res.status(400).json({ message: "Invalid code" });

    let discounted = total;
    if (promo.discountType === "percent")
      discounted = total - (total * promo.value) / 100;
    else if (promo.discountType === "flat")
      discounted = total - promo.value;

    res.json({ success: true, discounted });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
