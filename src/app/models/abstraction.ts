import {  PaymentProvider } from '../implementation';
export class Payment {
  protected provider: PaymentProvider;
  constructor(provider: PaymentProvider){
    this.provider = provider;
  }

  pay() {
    this.provider.execPayment();
  }
}
