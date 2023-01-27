import { Booking } from "./booking.model";
import { bookinRepository } from "./booking.repository";

type cErrors = Array<{ field: string; error: string }>;

type createResult = {
  errors?: cErrors;
  booking?: Booking;
};

const createBooking = (data: { [k: string]: any }): createResult => {
  // validation
  const requiredFields = ["name", "phoneNumber", "tableNumber"];

  let errors: cErrors = [];

  requiredFields.forEach((field) => {
    if (data[field] === undefined || data[field] === null) {
      errors = [...errors, { field, error: `The field ${field} is required.` }];
    }
    console.log({ field, val: data[field] });
  });

  if (errors.length) {
    return { errors };
  }

  const newBooking = bookinRepository.create(data as Omit<Booking, "id">);

  return { booking: newBooking };
};

export const bookService = {
  createBooking,
};
