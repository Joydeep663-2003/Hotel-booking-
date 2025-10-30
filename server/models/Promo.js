import mongoose from "mongoose";

const promoSchema = new mongoose.Schema({
  code: String,
  discountType: String, // "percent" or "flat"
  value: Number
});

export default mongoose.model("Promo", promoSchema);
