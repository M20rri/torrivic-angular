import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private _accoutManager: AuthService , private router : Router) { }
  loginCred = this._accoutManager.acc;
  isLogged : bool = false;

  login(model) {
    this.isLogged = this._accoutManager.login(model)
  }
  
logOut(){
  this.isLogged = false;
    this.router.navigate(["/"]);

}
  ngOnInit() {
  }

}