import { Component, OnInit } from '@angular/core';
import { SportRepository } from '../Model/SportsRepository.component';

@Component({
  selector: 'Sport-Home',
  templateUrl: 'SportClub.component.html'
})

export class SportClubComponent  {
  constructor(private repo:SportRepository) {

   }

}
