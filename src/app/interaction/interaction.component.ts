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
  @ViewChild("elementRefUsage") elementRefUsage: ElementRef;

  constructor() { }

  displayMessage(event) {
    this.messageFromChild = event;
  }

  ngOnInit() {
  
  }

  ngAfterViewInit() {
     this.childelementRef.nativeElement.focus();
     this.childelementRef.nativeElement.value =  5 ;
  }

bindchildelementRef(){
  alert(this.childelementRef.nativeElement.value)

if(this.childelementRef.nativeElement.value >= 5){
  this.elementRefUsage.nativeElement.innerText = 'More than 5';
  this.elementRefUsage.nativeElement.style.color = 'blue';
}else{
    this.elementRefUsage.nativeElement.innerText = 'Less than 5';
  this.elementRefUsage.nativeElement.style.color = 'red';
}



}

}