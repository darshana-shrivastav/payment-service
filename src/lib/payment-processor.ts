import { PaymentStrategy } from './payment-strategy';
import stripeService from '../services/stripe.service';

export class PaymentProcessor {
  private paymentStrategy: PaymentStrategy | undefined = stripeService;
  constructor(paymentStrategy?: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  async onboard(data: any) {
    const result = await stripeService.onboard(data);
    return result;
  }

  async getAccount(data: any) {
    return await stripeService.getAccount(data);
  }
}
