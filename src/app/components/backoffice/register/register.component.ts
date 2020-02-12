import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup(
    {
      email: new FormControl(""),
      password: new FormControl("")
    }
  )
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }
  signUp() {

    this.authService.register(this.register.value).then(() => {
      this.toastr.success('Created', 'Account created SuccessFully', {
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
