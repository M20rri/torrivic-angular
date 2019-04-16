import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorrivicService } from '../../shared/torrivic.service';

@Component({
  selector: 'app-add-oredit-task',
  templateUrl: './add-oredit-task.component.html',
  styleUrls: ['./add-oredit-task.component.css']
})
export class AddOreditTaskComponent implements OnInit {

  taskId: string;
  buttonText: string;


  constructor(private route: ActivatedRoute , private _ts: TorrivicService) {

    this.taskId = this.route.snapshot.params['id'];
  
    if (this.taskId == undefined) {
      this.buttonText = 'Add Task';

      

     
    } else {
      this.buttonText = 'Edit Task';

console.log(this._ts.getSingleTask(parseInt(this.taskId)))

    }

  }

  ngOnInit() {




  }

}