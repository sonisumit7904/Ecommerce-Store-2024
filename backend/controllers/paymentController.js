const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//PROCESSING PAYMENT, IN TEST MODE, NOT ACTIVE MOD
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    description:"This is a Test Payment",
    metadata: {
      company: "Ecommerce",
    },
  });

  res.status(200).json({
    success: true,
    client_secret: myPayment.client_secret,
  });
});

//STRIPE API KEY IS NEEDED IN FRONTEND, SO SENDING IT TO FRONTEND
exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    stripeApiKey: process.env.STRIPE_API_KEY,
  });
});
