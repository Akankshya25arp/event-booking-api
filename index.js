require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");
const eventRoutes = require("./routes/eventRoutes.js");
const bookingRoutes = require("./routes/bookingRoutes.js");

const app = express();
connectDB();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

console.log("MONGO_URI is:", process.env.MONGO_URI);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
