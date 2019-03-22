import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class TorrivicService {

  constructor(private _http: HttpClient) { }


  // static data

  batter: any = [
    { "id": 1001, "type": "Regular" },
    { "id": 1002, "type": "Chocolate" },
    { "id": 1003, "type": "Blueberry" },
    { "id": 1004, "type": "Devil's Food" }
  ]

  getBatters = function () {
    return this.batter;
  }


  // http service

  users: any;
  singleUser: any;

  getUsers = function () {
    return this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.users = res;
    })
  };

getUserbyId = function(id : number){
  return this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.singleUser = res.find(x => x.id == id);;
    })
};

}