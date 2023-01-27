import express from "express";
import { bookingRouter } from "./booking/booking.routes";

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/bookings", bookingRouter);

app.listen(PORT, () => {
  console.log(`Appliction started and listen on PORT : ${PORT}`);
});
