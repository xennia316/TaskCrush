const mongoose = require("mongoose");

const TripSchema = mongoose.Schema(
  {
    bus_id: { type: mongoose.ObjectId, ref: "bus" },
    departure: String,
    destination: String,
    price: Number,
    dept_time: Date,
    arr_time: Date,
    reserved_seats: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("trip", TripSchema);