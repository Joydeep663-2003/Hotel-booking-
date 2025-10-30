import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  slots: [
    {
      date: String,
      times: [{ time: String, available: Boolean }]
    }
  ]
});

export default mongoose.model("Experience", experienceSchema);
