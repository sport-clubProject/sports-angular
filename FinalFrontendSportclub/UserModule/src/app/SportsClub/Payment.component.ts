import { Component, OnInit } from '@angular/core';
import { SportRepository } from '../Model/SportsRepository.component';
import { Message } from '../Model/Messagemodel';
import { SportDataSource } from '../Model/RestDatasource.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'Sport-Payment',
  templateUrl: 'Payment.component.html',
  styleUrls: ['Payment.component.css'],
})
export class PaymentComponent {
  messageobj = new Message('', '+14849899891', 'Your Otp for payment');
  totalprice: number = 0;
  cupi: boolean = false;
  ccard: boolean = false;
  cnet: boolean = false;
  otpnot: boolean = false;
  public enteredotp: number = 0;
  public sendotpmodel: boolean = false;
  public showotplabel: boolean = false;
  verifybutt: boolean = false;
  showOtpField: boolean = false;
  showcard: boolean = false;
  showallpayments: boolean = true;
  constructor(public repo: SportRepository,private datasource:SportDataSource) {
    console.log(this.repo.bookingarray)
    console.log(this.repo.totalprice)

  }

  sucessfull() {
    this.repo.showsucessfull = true;
  }
  generateOTP() {
    console.log(this.messageobj);

    this.repo.getotp(this.messageobj);
    console.log(this.repo.returnotp());
    this.showOtpField = true;
  }
  get opt() {
    console.log(this.repo.returnotp() + ' component');
    return this.repo.returnotp();
  }
  verifyOTP() {
    console.log(this.opt + 'hello  verify' + this.enteredotp);
    if (this.opt == this.enteredotp) {
      Swal.fire("Good job!", "Payment Done Sucessfully!", "success")
      this.messageobj.message = 'Your booking id:1';
      console.log(this.messageobj);
      this.showcard = false;
      this.cnet = false;
      this.ccard = false;
      this.cupi = false;
      this.showallpayments=false;
      this.repo.sendbooking(this.messageobj);
      this.datasource.savebooking(this.repo.bookingarray)
      this.sucessfull();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Incorrect otp...',
        text: 'Please check your otp and try again!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      this.otpnot = true;
    }
  }

  payed() {
    this.showcard = true;
  }
  changeBank() {
    this.cnet = true;
    this.ccard = false;
    this.cupi = false;
  }
  changeCards() {
    this.cnet = false;
    this.ccard = false;
    this.cupi = true;
  }
  changeUpi() {
    this.cnet = false;
    this.ccard = true;
    this.cupi = false;
  }
}
