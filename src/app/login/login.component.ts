import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  activeTab = 'login';

  name = '';
  phone = '';
  otp = '';

  constructor(private router: Router) {}
  ngOnInit() {}

  sendOtp() {
    if (!this.phone) {
      alert('Please enter a phone number');
      return;
    }
    this.otp = '1234';
    alert('OTP sent: 1234 (for demo)');
  }

  signUp() {
    if (!this.name || !this.phone || !this.otp) {
      alert('Please fill all fields');
      return;
    }

    const userData = {
      name: this.name,
      phone: this.phone,
      otp: this.otp,
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Signup successful! You can now log in.');
    this.activeTab = 'login';
  }

  login() {
    const storedData = localStorage.getItem('userData');

    if (!storedData) {
      alert('No user found. Please sign up first.');
      return;
    }

    const parsed = JSON.parse(storedData);

    if (parsed.phone === this.phone && parsed.otp === this.otp) {
      alert(`Login successful! Welcome, ${parsed.name}`);
      localStorage.setItem('loggedInUser', parsed.name);
      this.goToPricing();
    } else {
      alert('Invalid phone or OTP.');
    }
  }

  goToPricing() {
    this.router.navigate(['/pricing']);
  }
}
