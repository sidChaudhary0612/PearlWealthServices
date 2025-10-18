import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import pricingData from 'src/assets/pricing.json'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  plans: any = [];
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.plans = pricingData.plans;
  }

  goToPlan(plan: any) {
    this.router.navigate(['/plan-details'], { state: { data: plan } });
  }

  backBtn() {
    this.location.back();
  }
}
