export interface PaymentStrategy {
  onboard(data: any): Promise<any>;

  getAccount(data: any): Promise<any>;
}
