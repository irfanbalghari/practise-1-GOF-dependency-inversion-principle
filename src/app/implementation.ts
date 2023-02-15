
export interface PaymentProvider {
  execPayment() : void;
}


export class PayPalProvider implements PaymentProvider {
  execPayment() {
    console.log("call PayPal API.. ")
  }
}

export class AppleProvider implements PaymentProvider {
  execPayment() {
    console.log("call ApplePay API.. ")
  }
}
