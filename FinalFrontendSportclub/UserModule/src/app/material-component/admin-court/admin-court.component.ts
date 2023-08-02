import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsRepository } from '../Models/sport.repo';
import { Courts } from '../Models/Courts.model';

@Component({
  selector: 'app-admin-court',
  templateUrl: './admin-court.component.html',
  styleUrls: ['./admin-court.component.css']
})
export class AdminCourtComponent implements OnInit {
  public sportId:number=0
  public courts:Courts[]=[];
  constructor( private router:ActivatedRoute,private repo:SportsRepository) { }

  ngOnInit(): void {

    //getting id from stadium
    this.router.paramMap.subscribe(params=>{
      console.log(params.get('sportId'))
     this.sportId =Number(params.get('sportId'))
     this.repo.getCourtBySportId(this.sportId);
  })

}

//
getCourtBySports(sportId:number){
  return this.repo.getCourtBySportId(sportId);

}

get getCourts(){
  return this.repo.getCourts();
}

removeCourt(courtId:number){
this.repo.deleteCourt(courtId);
}
}
