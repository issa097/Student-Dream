// routes.js
const express = require("express");
const router = express.Router();
const contactUsController = require("../Controller/ContactUsController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.get("/Contact", contactUsController.getAllContactMessages);
router.post(
  "/contact-uss",
  authenticateToken,
  contactUsController.addContactMessage
);
router.post(
  "/contact-uss/:_id",
  authenticateToken,
  contactUsController.addContactMessage
);
router.get(
  "/getContactMessageById/:_id",
  authenticateToken,
  contactUsController.getContactMessageById
);
router.get(
  "/getContactMessageByIduser/:_id",

  contactUsController.getContactMessageByIduser
);
router.get(
  "/getContactMessageadmin",
  authenticateToken,
  contactUsController.getUserMessages
);
router.get(
  "/getContactMessageByuser",
  authenticateToken,
  contactUsController.getAdminMessages
);

module.exports = router;
