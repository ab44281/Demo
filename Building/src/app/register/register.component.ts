import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

title="Society";

  ngOnInit() {
  }
  GoToSubmit(){
    alert('Dont worry,We will come soon');

  }
}
