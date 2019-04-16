import { Component, OnInit } from '@angular/core';
import { TorrivicService } from './../shared/torrivic.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor(private _ts: TorrivicService) { }

  ngOnInit() {
  }

}