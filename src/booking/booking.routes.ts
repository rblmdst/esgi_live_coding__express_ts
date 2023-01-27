import { Router, json, urlencoded } from "express";
import { bookService } from "./booking.service";

export const bookingRouter = Router();

bookingRouter.post(
  "/",
  json(),
  urlencoded({ extended: false }),
  (req, resp, next) => {
    try {
      const { body } = req;
      console.log({ body });

      const { errors, booking } = bookService.createBooking(body);

      if (errors) {
        return resp.status(400).json(errors);
      }
      return resp.status(201).json(booking);
    } catch (error) {
      return next(error);
    }
  }
);

// POST /bookings
