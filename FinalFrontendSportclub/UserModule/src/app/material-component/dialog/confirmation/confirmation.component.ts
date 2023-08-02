import { Component, OnInit, EventEmitter, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  onEmitStatusChage=new EventEmitter();
  deatils:any={};
  constructor(@Inject(MAT_DIALOG_DATA)public dialogData:any,
               private router:Router,   private _dialog:MatDialog) { }

  ngOnInit(): void {
    if(this.dialogData && this.dialogData.confirmation){
      this.deatils=this.dialogData;
    }
  }

  handleChangeAction(){
    this.onEmitStatusChage.emit();
    this.router.navigateByUrl("/");
    this._dialog.closeAll();

  }

}
