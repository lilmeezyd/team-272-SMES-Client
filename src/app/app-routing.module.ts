import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { FundersComponent } from './components/funders/funders.component';
import { SmesComponent } from './components/smes/smes.component';
import { UserModule } from './components/user/user.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SmesDashboardComponent } from './components/smes-dashboard/smes-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'smes-dashboard',
    component: SmesDashboardComponent
  },
  { path: 'user', loadChildren: () => UserModule },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [

      { path: 'Overview', component: OverviewComponent},
      { path: 'Funders', component: FundersComponent},
      { path: 'Smes', component: SmesComponent},
    ]
    },
    { path: 'sign-in', component: SignInComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
