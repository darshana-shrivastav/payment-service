import express from 'express';
import PaymentController from '../controllers/payment.controller';

const router = express.Router();

// Define CRUD routes and validation
router.get('/charge', PaymentController.charge);

router.get('/:providerId/onboarding', PaymentController.onboard);

router.post('/account', PaymentController.accountUpdates);

router.get('/stripe-callback', PaymentController.accountUpdates);

router.post('/create-payment-intent', PaymentController.createPaymentIntent);

export default router;