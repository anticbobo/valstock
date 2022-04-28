import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '~/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RoutingComponent } from './components/routing.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule,
  ],
  declarations: [RoutingComponent, LoginComponent],
})
export class LoginModule {}
