import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  file: any = {
    "date": "2013-10-15",
    "kieli": "1",
    "date_fi": "15.10.2013",
    "name": "Vuoden 1950 väestölaskennan otosaineiston käsikirja",
    "langs_text": 'ingen tekster',
    "lang": "fi",
    "type": "2",
    "rate": ".2",
    "Id": "10461",
    "price": "10461",
    "topic": null,
    'photo' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNFCU6xrHBAbmLWPHyHGoaxN1d62RiH6_gZ2v1eCPX6-ZAfTfew',
    "stat": 'Afdeling',
    "jakelutavat": "pdf",
    "addr": 'Afdeling Salessupport , t.a.v. dhr. A. Jansen , Postbus 90222 , 2554 FG '
  }

}