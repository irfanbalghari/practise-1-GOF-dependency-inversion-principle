import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/abstraction';
import { PayPalProvider } from '../implementation';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  payment: Payment;
  constructor() {
    this.payment = new Payment(new PayPalProvider());
  }

  ngOnInit() {
    this.payment.pay();

  }



}
