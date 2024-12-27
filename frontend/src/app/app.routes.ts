import {Routes} from '@angular/router';
import {FeedbackComponent} from './pages/feedback/feedback.component';
import {PaymentComponent} from './pages/payment/payment.component';
import {ProductComponent} from './pages/product/product.component';
import {HomeComponent} from './pages/home/home.component';
import {CleaningComponent} from "./pages/cleaning/cleaning.component";
import {DryCleaningComponent} from "./pages/dry_cleaning/dry-cleaning.component";
import {TutoringComponent} from "./pages/tutoring/tutoring.component";
import {ConciergeComponent} from "./pages/concierge/concierge.component";
import {ServiceSubscriptionComponent} from "./pages/service-subscription/service-subscription.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'services/cleaning', component: CleaningComponent},
  {path: 'services/dry-cleaning', component: DryCleaningComponent},
  {path: 'services/tutoring', component: TutoringComponent},
  {path: 'services/concierge', component: ConciergeComponent},
  {path: 'services/subscription', component: ServiceSubscriptionComponent},
];
