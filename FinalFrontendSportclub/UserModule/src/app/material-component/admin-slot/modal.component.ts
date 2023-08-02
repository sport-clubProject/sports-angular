import { Component, OnInit } from '@angular/core';
import { SportsRepository } from '../Models/sport.repo';
import { Slot } from '../Models/Slot.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'Admin-modal',
  templateUrl: 'modal.component.html'
})

export class ModalComponent {
  slot=new Slot(0,"","");
   days:string[]=["Weekend","Weekday"]
   showform:boolean=false

  constructor(
    private _dialog:MatDialog,
    private repo:SportsRepository
  ) {}

  onSave(): void {
    // Save the data and close the dialog
    this.repo.saveslot(this.slot);
    this._dialog.closeAll();
  }

  onClose(): void {
    // Close the dialog without saving
    this._dialog.closeAll();
  }

  addSlot(){
    this.showform=true
  }
  get slots(){
    return this.repo.getslots()
  }

}
