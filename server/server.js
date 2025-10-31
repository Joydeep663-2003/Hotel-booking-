import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Default route to confirm server is working
app.get("/", (req, res) => {
  res.send("✅ BookIt API is running successfully on Render!");
});

// ✅ All hotels with valid online images (Unsplash)
const experiences = [
  {
    _id: "1",
    title: "The Oberoi Grand, Kolkata",
    description:
      "Luxury heritage hotel offering world-class dining, spa, and classic colonial architecture in the heart of the city.",
    image:
      "https://images.unsplash.com/photo-1582719478173-2d66e7a74a14?w=800&auto=format&fit=crop&q=80",
    price: 12500,
  },
  {
    _id: "2",
    title: "Taj Lake Palace, Udaipur",
    description:
      "A stunning marble palace floating on Lake Pichola, offering royal suites and breathtaking sunset views.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
    price: 22000,
  },
  {
    _id: "3",
    title: "The Leela Palace, New Delhi",
    description:
      "5-star luxury hotel with rooftop pool, fine dining, and easy access to city attractions.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80",
    price: 19000,
  },
  {
    _id: "4",
    title: "Rambagh Palace, Jaipur",
    description:
      "Former royal residence offering regal decor, lush gardens, and grand courtyards.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80",
    price: 21000,
  },
  {
    _id: "5",
    title: "The Lalit Resort & Spa, Bekal",
    description:
      "A peaceful beachfront resort surrounded by backwaters and coconut palms in Kerala.",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb21029?w=800&auto=format&fit=crop&q=80",
    price: 9500,
  },
  {
    _id: "6",
    title: "JW Marriott, Mumbai Sahar",
    description:
      "Contemporary luxury hotel near Mumbai Airport with spa, pool, and fine dining options.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80",
    price: 15500,
  },
  {
    _id: "7",
    title: "ITC Grand Chola, Chennai",
    description:
      "Magnificent luxury hotel inspired by Chola dynasty architecture with 10 restaurants.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
    price: 14500,
  },
  {
    _id: "8",
    title: "Taj Falaknuma Palace, Hyderabad",
    description:
      "Historic palace on a hill offering panoramic city views, Italian marble staircases, and royal experiences.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
    price: 26000,
  },
  {
    _id: "9",
    title: "Evolve Back, Coorg",
    description:
      "Luxury eco-resort surrounded by coffee plantations offering private pool villas.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
    price: 18000,
  },
  {
    _id: "10",
    title: "Wildflower Hall, Shimla",
    description:
      "Mountain resort with spa and breathtaking views of the Himalayas.",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a0b3?w=800&auto=format&fit=crop&q=80",
    price: 17500,
  },
  {
    _id: "11",
    title: "Le Méridien, Goa",
    description:
      "Modern beachfront resort with tropical vibes and infinity pool.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    price: 12500,
  },
  {
    _id: "12",
    title: "Ananda in the Himalayas",
    description:
      "Luxury wellness retreat offering yoga, spa therapies, and scenic mountain views.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80",
    price: 30000,
  },
  {
    _id: "13",
    title: "Radisson Blu, Guwahati",
    description:
      "Upscale hotel featuring elegant interiors and serene lake views.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80",
    price: 11000,
  },
  {
    _id: "14",
    title: "Amanbagh Resort, Alwar",
    description:
      "Serene hideaway inspired by Mughal architecture with spa, yoga pavilion, and desert safaris.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=80",
    price: 28000,
  },
  {
    _id: "15",
    title: "The Tamara, Kodai",
    description:
      "Luxury hill resort in Kodaikanal surrounded by lush greenery and waterfalls.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    price: 16000,
  },
];

// ✅ API Routes
app.get("/api/experiences", (req, res) => res.json(experiences));
app.get("/api/experiences/:id", (req, res) => {
  const hotel = experiences.find((exp) => exp._id === req.params.id);
  if (!hotel) return res.status(404).json({ message: "Hotel not found" });
  res.json(hotel);
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
