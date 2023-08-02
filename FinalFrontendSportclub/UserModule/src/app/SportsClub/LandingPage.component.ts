import { Component, OnInit } from '@angular/core';
import { SportRepository } from '../Model/SportsRepository.component';
import { SportDataSource } from '../Model/RestDatasource.component';
import { Stadium } from '../Model/Stadium.model';
import { Cart } from '../Model/Cart.model';

@Component({
  selector: 'sports',
  templateUrl: './LandingPage.component.html',
  styleUrls: ['./LandingPage.component.css']
})

export class LandingPageComponent implements OnInit {
  public allstadiums:Stadium[]=[]
  searchQuery:string = "";
  // public usercart:Cart[]=[];


  constructor(public repository:SportRepository,public datasource:SportDataSource) {
    repository.book = true;
    repository.home = false;

    // datasource.userCart(this.repository.userid).subscribe(cart=>{
    //   this.usercart = cart;
    //   repository.cartsize = this.usercart.length;
    //  })

    this.datasource.getStadiums().subscribe(data=>{
     console.log(data)
     this.allstadiums=data
   })
  }
  sportType(sporttype:string){
    this.repository.sportsType = sporttype;
  }

  ngOnInit() {
    // this.repository.getSport()
    console.log("ttfghhuh")
  }
  get stadiums(){
    return this.repository.returnstadiums().filter( search => search.stadiumName.match(this.searchQuery))
  }
}
