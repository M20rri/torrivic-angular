import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  // ng If

  active: boolean = true;


  // ng Switch

  color: string = "black";



  // ng For

  colors: any = [
    { name: "aliceblue", code: "#f0f8ff" },
    { name: "antiquewhite", code: "#faebd7" },
    { name: "aqua", code: "#00ffff" },
    { name: "aquamarine", code: "#7fffd4" },
    { name: "azure", code: "#f0ffff" },
    { name: "beige", code: "#f5f5dc" },
    { name: "bisque", code: "#ffe4c4" },
    { name: "black", code: "#000000" },
    { name: "blanchedalmond", code: "#ffebcd" },
    { name: "blue", code: "#0000ff" },
    { name: "blueviolet", code: "#8a2be2" },
    { name: "brown", code: "#a52a2a" }
  ]


  // class binding

  isActive = true;

  constructor() { }

  ngOnInit() {
  }

}