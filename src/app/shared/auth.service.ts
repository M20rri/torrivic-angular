import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Task } from "../shared/task";
import { Account } from "../model/Account";
import { map } from "rxjs/operators";
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class AuthService {

  acc: Account = {};
  isLoggedIn: boolean = false;
  constructor(private _http: HttpClient, private toastr: ToastrManager) { }

  login(entity: Account): boolean {
    if (entity.username == 'Torrivic' && entity.password == 'JS@wyer') {
      this.toastr.successToastr("Logged", "Thank you " + entity.username + "!", {
        position: "bottom-right"
      });
      this.isLoggedIn = true;
      return true;
    }
    else {
      this.toastr.errorToastr("Logged", "Invalid username or password", {
        position: "bottom-right"
      });
      this.isLoggedIn = false;
      return false;
    }

  }


  loggedIn() {
    return this.isLoggedIn
  }
}