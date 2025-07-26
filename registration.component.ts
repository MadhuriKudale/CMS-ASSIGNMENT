import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  timer: number = 0;
  resendCount = 0;
  resendColor = 'green';
  interval: any;

  formData = {
    fullName: '',
    mobile: '',
    email: '',
    childName: '',
    grade: '',
    address: ''
  };

  generateOTP() {
    this.startTimer();
    this.resendCount = 0;
    this.resendColor = 'green';
  }

  startTimer() {
    this.timer = 45;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        clearInterval(this.interval);
        if (this.resendCount < 3) {
          this.resendColor = 'green';
        }
      }
    }, 1000);
  }

  resendOTP() {
    if (this.resendCount < 3 && this.timer === 0) {
      this.resendCount++;
      this.resendColor = 'red';
      this.startTimer();
    }
  }

  submitForm() {
    console.log("Submitted:", this.formData);
    // You can call a service to post this to the backend
  }
}
