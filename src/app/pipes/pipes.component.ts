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
    'photo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNFCU6xrHBAbmLWPHyHGoaxN1d62RiH6_gZ2v1eCPX6-ZAfTfew',
    "stat": 'Afdeling',
    "jakelutavat": "pdf",
    "addr": 'Afdeling Salessupport , t.a.v. dhr. A. Jansen , Postbus 90222 , 2554 FG '
  }



  numbers: Array<number> = [32, 62, 79, 44, 5, 20, 17, 40, 26, 84, 40, 36, 85, 99, 20, 77, 7, 78, 89, 86, 90, 81, 42, 20, 19, 56, 11, 94, 12, 38, 23, 82, 72, 33, 55, 49, 10, 100, 9, 34, 77, 54, 2, 72, 448, 50, 73, 98, 34, 7, 71, 57, 80, 75, 78, 94, 82, 53, 84, 78, 7, 62, 42, 37, 13, 48, 83, 53, 52, 41, 56, 42, 53, 20, 88, 96, 21, 31, 60, 51, 25, 37, 45, 83, 93, 22, 17, 81, 72, 94, 44, 28, 53, 4, 100, 25, 81, 36, 24]


addNumberSix(){

  this.numbers.push(6)

}

}