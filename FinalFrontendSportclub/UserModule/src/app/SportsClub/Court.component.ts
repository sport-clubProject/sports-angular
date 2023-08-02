import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SportRepository } from '../Model/SportsRepository.component';
import { Court } from '../Model/Court.model';
import { BookingDetails } from '../Model/Bookingdetails.model';
import { Sport } from '../Model/Sport.model';

@Component({
  selector: 'Sport-Court',
  templateUrl: 'Court.component.html'
})

export class CourtComponent {
  public courtrefid:number=0;
  public sportrefid:number=0;
  public courtname:string | undefined="";
  public sportname:string | undefined="";
  public hide:boolean=true;

  public allcourts:Court[] | undefined=[];
  public isDateslected:boolean=false
  public showbutt:boolean=false;
  minDate=new Date();
   selecteddate="";
   public reviewbutt:boolean=false;
   public showslotbutt:boolean=false;
  constructor(public repo:SportRepository,private router:Router,private activeroute:ActivatedRoute) {
       this.sportrefid=(this.activeroute.snapshot.params["id"])
      this.allcourts= this.repo.getcourtbyid(this.activeroute.snapshot.params["id"])
      console.log(this.allcourts)
      console.log(this.activeroute.snapshot.params["id"])
      console.log(this.repo.Sports)
    this.allcourts=this.repo.Sports?.find(e=>e.sportId==this.sportrefid)?.courts
    console.log(this.allcourts)
   }

   fetchslots(courtid:number){
    console.log("hello")
   this.selecteddate=this.repo.selectedDate.getDate().toString()
   this.selecteddate=this.selecteddate+"/07/2023";
   this.repo.selectdate=this.selecteddate
    console.log(this.repo.selectdate+" date")
      this.courtrefid=courtid;
      console.log(courtid)
      this.courtname=this.allcourts?.find(e=>e.courtId==courtid)?.courtName;
      this.sportname=this.repo.Sports?.find(e=>e.sportId==courtid)?.sportName;
      this.repo.courtname=this.courtname
      console.log(this.repo.courtname)

      if(this.sportname==undefined){
          this.sportname="cricket"
      }
      if(this.courtname==undefined){
        this.courtname="Net1";
      }
      this.repo.getslot(this.sportname,this.selecteddate,this.courtname)
      this.slots
   }
   get slots(){
    console.log(this.repo.displayslot())
    return this.repo.displayslot()
   }

  saveslot(slot: string) {
    this.reviewbutt = true;
    this.repo.slottime=slot
   this.router.navigate(['/Booking',this.courtrefid])
  }

   avialablecourts(){

   // console.log(this.repo.displaycourts())
     this.repo.getcourts();
     this.allcourts=[];
     console.log(this.allcourts+"before");
     this.allcourts= this.repo.displaycourts()
     console.log(this.allcourts+"after");
   }

  datesubmit() {
    this.avialablecourts()
     console.log('okkkkkkkkkkkkkkk')
   }
}
