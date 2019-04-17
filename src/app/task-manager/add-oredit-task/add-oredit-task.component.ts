import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorrivicService } from '../../shared/torrivic.service';
import { Task } from "../../shared/task";

@Component({
  selector: 'app-add-oredit-task',
  templateUrl: './add-oredit-task.component.html',
  styleUrls: ['./add-oredit-task.component.css']
})
export class AddOreditTaskComponent implements OnInit {

  taskId: string;
  buttonText: string;
  task: Task;

  constructor(private route: ActivatedRoute, private _ts: TorrivicService) {}

  ngOnInit() {

    this.taskId = this.route.snapshot.params['id'];

    if (this.taskId == undefined) {
      this.buttonText = 'Add Task';
         this.task = {
           id : 0,
           name : null,
           description : null
         };
    } else {
      this.buttonText = 'Edit Task';
   
      this.task = this._ts.getSingleTask(parseInt(this.taskId));
    }




  }

}