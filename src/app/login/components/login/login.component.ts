import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  public loginFormGroup: FormGroup;
  public viewPass = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {}

  public ngOnInit() {
    this.initLoginFormGroup();
  }

  public login() {
    const val = this.loginFormGroup.value;

    if (val.username && val.password) {
      this.loginService
        .login(val.username, val.password)
        .pipe(
          catchError(() => this.router.navigateByUrl('/login'))
        )
        .subscribe(() => this.router.navigateByUrl('/dashboard'));
      this.loginService.isAuthenticated = true;
    }
  }

  public togglePassView() {
    this.viewPass = !this.viewPass;
  }

  public get isLoginFormInvalid(): boolean {
    return this.loginFormGroup.pristine || !this.loginFormGroup.valid;
  }

  private initLoginFormGroup() {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
