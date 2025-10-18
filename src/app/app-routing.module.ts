import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'pricing',component:PricingComponent},
  { path: 'plan-details', component: ScannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
