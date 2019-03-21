import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  messageFromParent: string = "This message send from parent to child"
  messageFromChild: string = "";
  constructor() { }

  displayMessage(event) {
    this.messageFromChild = event;
  }

  ngOnInit() {
  }

}