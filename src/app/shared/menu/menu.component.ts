import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  dashboard() {
    this.router.navigateByUrl('/covid/dashboard');
  }

  map() {
    this.router.navigateByUrl('/covid/world-map');
  }

  list() {
    this.router.navigateByUrl('/covid/world-list');
  }

  donut() {
    this.router.navigateByUrl('/covid/live');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  isActive(path: string) {
    return this.router.isActive(path, false);
  }
}
