import { Component, OnInit , Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

// Get data from parent (Input)

@Input('fromParent') fromParent: string;


// Send data from child (EventEmitter , Output)

@Output('childTransformer') childTransformer = new EventEmitter();
fromChild : string = "This message send from Child to Parent";

sendDataFromChild(){
 this.childTransformer.emit(this.fromChild);
}

  constructor() { }

  ngOnInit() {
  }

}