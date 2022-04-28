import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RoutingComponent } from './components/routing.component';

const routes: Routes = [
  {
    path: "",
    component: RoutingComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      }
    ]
  },
  {
    path: "**",
    component: LoginComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
