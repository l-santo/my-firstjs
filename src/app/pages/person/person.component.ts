import { Component, OnInit } from '@angular/core';
import { PersonModel } from '../../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  name = "";
  thereAreText = false;

  peopleList: PersonModel[] = [
    new PersonModel("Codigo", "N.- 001", 1)
  ]
  showText() {
    console.log(this.name);
    this.thereAreText = this.name.length >= 1;
    // if(this.name.length >= 1 ){
    //   this.thereAreText = true;
    // }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
