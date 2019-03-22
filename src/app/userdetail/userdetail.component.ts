import { Component, OnInit } from '@angular/core';
import { TorrivicService } from './../shared/torrivic.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  id : number;

  constructor(private _ts: TorrivicService  , private route: ActivatedRoute) { }

  ngOnInit() {

    this.id =  parseInt(this.route.snapshot.paramMap.get("id"));
    this._ts.getUserbyId(this.id);
  }

}