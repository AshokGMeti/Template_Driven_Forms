import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  constructor() { }
   
  ngOnInit(): void {
  }
  onSubmit(contactForm:any)
  {
          console.log(contactForm.value);
  }

}
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}