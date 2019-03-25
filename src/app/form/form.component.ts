import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  languages: any = ['English', 'Arabic', 'French', 'Dutch'];
  skills: any = [{ 'id': 1, 'name': 'Football' }, { 'id': 2, 'name': 'Reading' }, { 'id': 3, 'name': 'Swimming' }, { 'id': 4, 'name': 'Diving' }, { 'id': 5, 'name': 'Boxing' }, { 'id': 6, 'name': 'Coocking' }];

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    // itemsShowLimit: 3,
    allowSearchFilter: true
  };
  onItemSelect(item: any) {
    // console.log(item);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }


  enrollment: any = {
    'name': null,
    'email': null,
    'phone': null,
    'language': '',
    'skills': [],
    'gender': "M",
    'isAgree': false
  }



  saveEnrollment() {

    this.enrollment.skills = Array.from(this.enrollment.skills.map(function (e) {
      return e.id;
    }));

    this.toastr.successToastr("Hey "+this.enrollment.name+".", "Wow!", {
      position: "bottom-right"
    });

    console.log(this.enrollment)
  }

  constructor(private toastr: ToastrManager) { }

  ngOnInit() {
  }

}