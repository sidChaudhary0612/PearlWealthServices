import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {
planData: any;

  constructor(private router: Router,private location: Location) {
    const navigation = this.router.getCurrentNavigation();
    this.planData = navigation?.extras.state?.['data'];
  }

  backBtn(){
    this.location.back();
  }
}
