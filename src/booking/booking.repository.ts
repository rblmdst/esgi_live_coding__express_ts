import { Booking } from "./booking.model";
import { randomUUID } from "crypto";

let BOOKINGS: Booking[] = [];

const create = (data: Omit<Booking, "id">): Booking => {
  const id = randomUUID();
  const newBooking: Booking = { ...data, id };

  BOOKINGS = [...BOOKINGS, newBooking];

  return newBooking;
};

const getById = () => {};

export const bookinRepository = {
  create,
};
