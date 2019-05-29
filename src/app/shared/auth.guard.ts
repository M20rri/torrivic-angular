import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrManager } from "ng6-toastr-notifications";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, private route: Router,
    private toastr: ToastrManager) { }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }

    this.toastr.errorToastr("You shall not pass ..!", "OOps", {
      position: "bottom-right"
    });

    this.route.navigate(["/"]);
    return false;
  }
}
