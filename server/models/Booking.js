import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  experienceId: { type: mongoose.Schema.Types.ObjectId, ref: "Experience" },
  name: String,
  email: String,
  date: String,
  time: String,
  total: Number,
  status: { type: String, default: "confirmed" }
});

export default mongoose.model("Booking", bookingSchema);
