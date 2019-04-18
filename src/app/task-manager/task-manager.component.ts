import { Component, OnInit } from '@angular/core';
import { TorrivicService } from './../shared/torrivic.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor(private _ts: TorrivicService, private toastr: ToastrManager) { }

  ngOnInit() {
  }

remove(taskId : number){
   this._ts.removeTask(taskId);
     this.toastr.warningToastr("Task", "Deleted Sucesfully!", {
        position: "bottom-right"
      });
}

}