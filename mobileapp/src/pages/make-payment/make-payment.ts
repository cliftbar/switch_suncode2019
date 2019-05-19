import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from "lodash";

@IonicPage()
@Component({
  selector: 'page-make-payment',
  templateUrl: 'make-payment.html',
})
export class MakePaymentPage {
  userData: any;
  totalBill: any;
  flow = 'details'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userData = this.navParams.get("userData")
    this.totalBill = _.sumBy(this.userData.account_info.bills, (bill)=>bill.value)
  }
  getTotalPayment(){
    return this.userData.payment_amount.total_amount_due + this.userData.payment_amount.convenience_fee + this.userData.payment_amount.service_fee
  }
  selectPaymentMethod(){

  }
  hideCard(cardNumber){
    return cardNumber.replace(/.(?=.{4})/g, "*")
  }
  paymentDetails(){
    this.flow = "payment"
  }
  paymentMethod(){
    this.flow = "payment-method"
  }
  preConfirm(){
    this.flow = "pre-confirm"
  }
  confirmStep(){
    this.flow = "confirm"
  }
  makePayment(){

  }

  cardImage(cardType){
    switch(cardType){
      case "maestro":
        return "assets/imgs/maestro.png"
      case "master":
        return "assets/imgs/master.png"
      case "visa":
        return "assets/imgs/visa.png"
      case "discover":
        return "assets/imgs/discover.jpg"
    }
  }
}
