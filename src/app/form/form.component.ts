import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  languages : any = ['English' , 'Arabic','French' , 'Dutch'];


  enrollment : any = {
    'name' : null,
    'email':null,
    'phone':null,
    'language':"0",
    'gender':"M",
    'isAgree' : false
  }

  saveEnrollment(){
    console.log(this.enrollment)
  }

  constructor() { }

  ngOnInit() {
  }

}