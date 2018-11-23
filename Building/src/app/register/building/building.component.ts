import { Component, OnInit } from '@angular/core';
import { ResidentService } from 'src/app/resident.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  buildingTS = {
    'buildingName': 'R',
    'societyid': 88
  };
  constructor(public _build: ResidentService) { }

  ngOnInit() {
  }

  GoToSubmit() {
    // console.log(this.buildingTS);
    this._build.registerBuilding(this.buildingTS).subscribe((data) => {
      console.log('Building successfull added');
    // console.log(data);
  });
}
}
