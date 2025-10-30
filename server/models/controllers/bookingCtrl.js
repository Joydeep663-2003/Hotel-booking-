import Booking from "../models/Booking.js";
import Experience from "../models/Experience.js";

export const createBooking = async (req, res) => {
  try {
    const { experienceId, name, email, date, time, total } = req.body;

    const exp = await Experience.findById(experienceId);
    if (!exp) return res.status(404).json({ message: "Experience not found" });

    const slotDate = exp.slots.find(s => s.date === date);
    if (!slotDate) return res.status(400).json({ message: "Date not available" });

    const slotTime = slotDate.times.find(t => t.time === time);
    if (!slotTime || !slotTime.available)
      return res.status(400).json({ message: "Slot unavailable" });

    // Mark slot as booked
    slotTime.available = false;
    await exp.save();

    const booking = await Booking.create({
      experienceId,
      name,
      email,
      date,
      time,
      total
    });

    res.json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
