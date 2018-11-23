import { Component, OnInit } from '@angular/core';
import { ResidentService } from 'src/app/resident.service';


@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  societyTS = {
    'societyName': '',
    'address': '',
    'pincode': ''
    };
  constructor(public _residentservice: ResidentService) { }

  ngOnInit() {
  }

  GoToSubmit() {
    // console.log(this.societyTS);
    this._residentservice.registerSociety(this.societyTS).subscribe((data) => {
      console.log('society successfull added ');

  });

}
}
