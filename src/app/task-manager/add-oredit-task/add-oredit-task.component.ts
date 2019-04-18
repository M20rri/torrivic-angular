import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TorrivicService } from '../../shared/torrivic.service';
import { Task } from "../../shared/task";
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-add-oredit-task',
  templateUrl: './add-oredit-task.component.html',
  styleUrls: ['./add-oredit-task.component.css']
})
export class AddOreditTaskComponent implements OnInit {

  taskId: string;
  buttonText: string;
  task: Task;

  constructor(private route: ActivatedRoute, private _ts: TorrivicService, private toastr: ToastrManager, private router: Router) { }

  ngOnInit() {

    this.taskId = this.route.snapshot.params['id'];

    if (this.taskId == undefined) {
      this.buttonText = 'Add Task';
      this.task = {
        id: 0,
        name: null,
        description: null
      };
    } else {
      this.buttonText = 'Edit Task';

      this.task = this._ts.getSingleTask(parseInt(this.taskId));
    }
  }


  saveTask() {

    if (this.task.id == 0) {

      // create
      this._ts.addTask(this.task);
      this.toastr.successToastr(this.task.name + ".", "Saved Sucesfully!", {
        position: "bottom-right"
      });
      this.router.navigate(['taskManager']);

    } else {

      // edit
      this._ts.addTask(this.task);
      this.toastr.infoToastr(this.task.name + ".", "Updated Sucesfully!", {
        position: "bottom-right"
      });
      this.router.navigate(['taskManager']);
    }


  }

}