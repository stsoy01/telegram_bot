import { Routes } from '@angular/router';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'product', component: ProductComponent},
];
