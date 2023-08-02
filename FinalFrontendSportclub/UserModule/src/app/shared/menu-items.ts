import { Injectable } from "@angular/core"
export interface Menu
{
  state:string,
  name:string,
  type:string,
  icon:string,
  role:string
}

const MENUITEMS=[
  {state:'dashboard',name:'Dashboard',type:'link',icon:'dashboard',role:''},
  {state:'category',name:'Manage Sports',type:'link',icon:'category',role:'admin'},
  {state:'product',name:'Manage Courts',type:'link',icon:'inventory_2',role:'admin'},
  {state:'order',name:'Manage Bookings',type:'link',icon:'shopping_cart',role:''},
  {state:'bill',name:'Coupons',type:'link',icon:'backup_table',role:''},
  {state:'user',name:'Manage User',type:'link',icon:'backup_table',role:'admin'},
]

@Injectable()
export class MenuItems{

  getMenuItems():Menu[]{
    return MENUITEMS;
  }
}
