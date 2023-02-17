const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

// router objects

const router = express.Router();

// Register router method -post
router.post("/register", registerController);

// Login router method -post
router.post("/login", loginController);

// Login router method -post
router.post("/getUserData", authMiddleware, authController);

// Apply Doctor method -post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

// Notification Doctor method -post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notifiaction  Doctor (DELETE)|| POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

// export
module.exports = router;
