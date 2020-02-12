import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.userAuthenticated().subscribe((user) => {
      this.currentUser = user;
    })
  }
  signOut() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login')
    }).catch((err) => {
      console.log(err.message)

    })
  }

}
