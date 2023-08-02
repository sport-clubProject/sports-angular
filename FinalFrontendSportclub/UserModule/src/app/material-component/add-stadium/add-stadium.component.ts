import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SportsRepository } from '../Models/sport.repo';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadiumForm:FormGroup;
  constructor(private fb:FormBuilder,private repo:SportsRepository) {
    this.stadiumForm=this.fb.group({
      stadiumName:['',Validators.required],
      location:['',Validators.required],
      // sports:[[]]


    });
}


  get stadiumName(){
    return this.stadiumForm.get('stadiumName')
  }

  get location(){
    return this.stadiumForm.get('location')
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert(1)
    console.log(this.stadiumForm.dirty)
    console.log(this.stadiumForm.value)
    console.log("hello")
    this.repo.saveStadium(this.stadiumForm.value)
  }

}
