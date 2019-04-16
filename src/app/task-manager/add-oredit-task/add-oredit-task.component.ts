import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-oredit-task',
  templateUrl: './add-oredit-task.component.html',
  styleUrls: ['./add-oredit-task.component.css']
})
export class AddOreditTaskComponent implements OnInit {

  taskId: string;
  buttonText: string;


  constructor(private route: ActivatedRoute) {

    this.taskId = this.route.snapshot.params['id'];
   console.log(this.taskId)
    if (this.taskId == undefined) {
      this.buttonText = 'Add Task';
     
    } else {
      this.buttonText = 'Edit Task';
    }

  }

  ngOnInit() {




  }

}