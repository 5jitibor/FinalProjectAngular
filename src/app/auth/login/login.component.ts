import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  modalRef: BsModalRef;

  @ViewChild('loginError') loginErrorTemplate: TemplateRef<any>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.router.navigateByUrl('/covid/dashboard');
    }
  }

  login() {
    const logged: boolean = this.authService.login(this.email, this.password);
    if (logged) {
      this.router.navigateByUrl('/covid/dashboard');
    } else {
      this.modalRef = this.modalService.show(this.loginErrorTemplate);
    }
  }

  signup() {
    this.router.navigateByUrl('/auth/signup');
  }
}