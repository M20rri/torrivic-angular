import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit, AfterViewInit {

  messageFromParent: string = "This message send from parent to child"
  messageFromChild: string = "";

  @ViewChild("childelementRef") childelementRef: ElementRef;
  @ViewChild("elementRefUsage") elementRefUsage: ElementRef;

  constructor(private _render: Renderer2) { }

  displayMessage(event) {
    this.messageFromChild = event;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.childelementRef.nativeElement.focus();
    this.childelementRef.nativeElement.value = 5;
  }

  bindchildelementRef() {

    if (this.childelementRef.nativeElement.value >= 5) {

      // Stage 1
      this.elementRefUsage.nativeElement.innerText = 'More than 5';
      this.elementRefUsage.nativeElement.style.color = 'blue';


      // OR
      // this._render.setProperty(this.elementRefUsage.nativeElement, 'innerHTML', 'More than 5');
      // this._render.addClass(this.elementRefUsage.nativeElement, 'text-success');


    } else {

      // Stage 1
      this.elementRefUsage.nativeElement.innerText = 'Less than 5';
      this.elementRefUsage.nativeElement.style.color = 'red';

      // OR
      // this._render.setProperty(this.elementRefUsage.nativeElement, 'innerHTML', 'Less than 5');
      // this._render.addClass(this.elementRefUsage.nativeElement, 'text-primary');


    }



  }

}