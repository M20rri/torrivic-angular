import { Component, OnInit } from '@angular/core';
import { TorrivicService } from './../shared/torrivic.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  constructor(private _conf : TorrivicService ) { 

  }

  ngOnInit() {
  }

}