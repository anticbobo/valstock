import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const loginModule = () =>
  import('./login/login.module').then((x) => x.LoginModule);
const dashboardModule = () =>
  import('./dashboard/dashboard.module').then((x) => x.DashboardModule);

const routes: Routes = [
  { path: 'dashboard', loadChildren: dashboardModule, canActivate: [AuthGuard] },
  { path: 'login', loadChildren: loginModule },
  // redirect to /dashboard if path not found. If token is expired will redirect to login
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
