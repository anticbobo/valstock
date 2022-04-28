import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HandleImageDialogComponent } from './components/add-to-gallery-dialog/add-to-gallery-dialog.component';
import { HttpErrorInterceptor } from './errors/http-error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MaterialModule } from './material.module';
import { SnackBarService } from './services/snack-bar.service';

@NgModule({
  declarations: [
    HandleImageDialogComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    //components
    HandleImageDialogComponent,

    // modules
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    SnackBarService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class SharedModule {}
