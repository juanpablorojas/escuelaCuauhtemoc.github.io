import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPaymentComponent } from './register-payment/register-payment.component';
import { RegistryComponent } from './registry/registry.component';
import { ReportsComponent } from './reports/reports.component';
import { SearchPayComponent } from './search-pay/search-pay.component';

const routes: Routes = [
  {
    path: 'main-page',
    component: MainPageComponent,
    children: [
      {
        path: 'register',
        component: RegisterPaymentComponent
      },
      {
        path: 'search',
        component: SearchPayComponent
      },
      {
        path: 'registry',
        component: RegistryComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      }
    ]
  },
  {
    path: '**',
    component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
