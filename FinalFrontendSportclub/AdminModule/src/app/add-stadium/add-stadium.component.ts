import { Component, OnInit } from '@angular/core';
import { Stadium } from '../model/Stadium.model';
import { AdminRepository } from '../model/adminrepository.component';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadiumref=new Stadium(0,"","",[]);
  constructor(private repo:AdminRepository) { }

  ngOnInit(): void {
  }
  savestadium(stadium:Stadium){
    this.stadiumref.stadiumName=stadium.stadiumName,
    this.stadiumref.location=stadium.location,
    this.repo.saveStadium(this.stadiumref)
  }
}
