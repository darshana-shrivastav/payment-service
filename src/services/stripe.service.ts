class StripeService {
  private stripe = require('stripe')('sk_test_51OWYVbSJzDxzlcVNtqr9Tzcp49xyxwJuOF4aOZhy329WumETyAM82RQeb4vSIBrLas3n9Qha22EMymvqbTKSaas600mn4MRuSE');

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

      accountLink.account_id = account.id;

      return accountLink;
    } catch (error) {
      console.log(error);
    }
  }

  public getEvent(signature: any, body: any) {
    const endpointSecret = process.env.ENDPOINT_SECRET;
    const sig = signature;
    const event = this.stripe.webhooks.constructEvent(body, sig, endpointSecret);
    return event;
  }

  public async getAccount(accountId: any): Promise<any> {
    try {
      const account = await this.stripe.accounts.retrieve(accountId);
      console.log(account);
      return account;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new StripeService();