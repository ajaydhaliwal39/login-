
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      loginType: ['email'],
      deviceId: ['123'],
      deviceType: ['web'],
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.auth.post('auths/signin', this.loginForm.value).subscribe(
        (res: any) => {
          if (res.isSuccess) {
            this.auth.successMsg('login Success ');
            localStorage.setItem('userData', JSON.stringify(res.data));
            localStorage.setItem('userId', JSON.stringify(res.data.id));
            localStorage.setItem('accessToken', res.data.accessToken);
            this.router.navigateByUrl('/user/data');
          } else {
            this.auth.errorMsg(res.message);
          }
        });
    }
  }

}

