import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {

  constructor() { }

  topics = ['Angular', 'React', 'Vue'];

  users = new User('abc', 'a@gmail.com', 9876543210, '', 'morning', true);

  ngOnInit() {
  }

}
