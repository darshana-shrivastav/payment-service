import { PaymentStrategy } from '../payment-strategy';

class StripeService {
  private stripe = require('stripe')(process.env.STRIPE_KEY);

  public async onboard(providerId: any): Promise<any> {
    try {

      const account = await this.stripe.accounts.create({
        country: 'IN',
        type: 'standard',
        business_type: 'individual',
        metadata: {
          providerId
        }
      });
      console.log(account);

      const accountLink = await this.stripe.accountLinks.create({
        account: account.id,
        refresh_url: `https://e188-2405-201-3016-b346-d576-a8f6-b6e8-c4f7.ngrok-free.app/api/stripe-callback`,
        return_url: `https://e188-2405-201-3016-b346-d576-a8f6-b6e8-c4f7.ngrok-free.app/api/stripe-callback`,
        type: 'account_onboarding',
      });

      return accountLink;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  public getEvent(signature: any, body: any) {
    const endpointSecret = process.env.ENDPOINT_SECRET;
    const sig = signature;
    const event = this.stripe.webhooks.constructEvent(body, sig, endpointSecret);
    return
  }

  public async getAccount(accountId: any): Promise<any> {
    try {
      const account = await this.stripe.accounts.retrieve('acct_1Nv0FGQ9RKHgCVdK');
      console.log(account);
      return account;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new StripeService();