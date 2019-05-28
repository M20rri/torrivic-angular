import { Component, OnInit } from '@angular/core';
import { TorrivicService } from './../shared/torrivic.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  



  constructor(private _ts: TorrivicService) { }

  ngOnInit() {
    this._ts.getUsers().subscribe(function(res){
      console.log(res)
    });

  }

  isChoosen(user){
    return user.id == localStorage.getItem('selectedId');
  }

}