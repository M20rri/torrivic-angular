import { Component, OnInit  , ViewChild , ElementRef , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit , AfterViewInit{

  messageFromParent: string = "This message send from parent to child"
  messageFromChild: string = "";

  @ViewChild("childelementRef") childelementRef: ElementRef;

  constructor() { }

  displayMessage(event) {
    this.messageFromChild = event;
  }

  ngOnInit() {
  
  }

  ngAfterViewInit() {
     this.childelementRef.nativeElement.focus();
     this.childelementRef.nativeElement.value = "Torrivic";
  }

bindchildelementRef(){
  alert(this.childelementRef.nativeElement.value)
}

}