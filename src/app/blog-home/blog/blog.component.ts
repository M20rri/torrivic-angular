import { Component, OnInit } from '@angular/core';
import { TorrivicService } from '../../shared/torrivic.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private _blog : TorrivicService) { }

  ngOnInit() {
  }

}