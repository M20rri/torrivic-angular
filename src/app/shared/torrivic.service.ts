import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

  todos: any;

  getTodos = function () {
    return this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe(res => {
      this.todos = res;
    });
  }


}