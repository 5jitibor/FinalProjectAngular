import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';

  constructor(private authService:AuthService, private router:Router, private spinnerService:NgxSpinnerService){}
  ngOnInit(): void {
    this.router.events.subscribe((event:RouterEvent)=>{
        if(event instanceof NavigationStart){
            this.spinnerService.show();
        }else if(event instanceof NavigationEnd){
          this.spinnerService.hide();
        }else if(event instanceof NavigationError){
          this.spinnerService.hide();
        }else if(event instanceof NavigationCancel){
          this.spinnerService.hide();
        }
    });
  }

  isAuthenticated(): boolean{
    return this.authService.isAuthenticated();
  }
}
