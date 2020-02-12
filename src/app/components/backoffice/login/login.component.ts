import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  register = new FormGroup(
    {
      email: new FormControl(""),
      password: new FormControl("")
    }
  )
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }


  ngOnInit() {
  }
  signIn() {

    this.authService.login(this.register.value).then(() => {
      this.toastr.success('logged', 'Account logged SuccessFully', {
        timeOut: 5000,
        positionClass: 'toast-bottom-left',
        tapToDismiss: true
      });
      this.router.navigateByUrl('/blog')

    })
      .catch((err) => {

        this.toastr.error('Created', err.message, {
          timeOut: 10000,
          positionClass: 'toast-bottom-left',
          tapToDismiss: true
        });

      })

  }

}
