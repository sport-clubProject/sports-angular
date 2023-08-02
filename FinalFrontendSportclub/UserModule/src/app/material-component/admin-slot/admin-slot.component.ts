import { Component, OnInit } from '@angular/core';
import { SportsRepository } from '../Models/sport.repo';
import { Slot } from '../Models/Slot.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-admin-slot',
  templateUrl: './admin-slot.component.html',
  styleUrls: ['./admin-slot.component.css']
})
export class AdminSlotComponent  {
   slot=new Slot(0,"","");
   days:string[]=["Weekend","Weekday"]
   showform:boolean=false
   allslots:Slot[]=[];
  constructor(
    private repo:SportsRepository,private route:Router,
    private dialog:MatDialog
  ) {
    this.slots()
  }



  addSlot() {
    this.dialog.closeAll()
    this.dialog.open(ModalComponent)
  }
  slots(){
    this.allslots= this.repo.getslots()
  }
  updateslot(id:number){
    let index:number=this.repo.slots.findIndex(e=>e.slotId==id)

  }
  deleteslot(id:number){
    console.log(id)
    this.allslots=[]
     this.allslots= this.repo.slots.filter(e=>e.slotId!=id)
     this.repo.slots=this.allslots
     this.repo.deleteslot(id)
  }

}
