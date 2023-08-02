import { Courts } from "./Courts.model";

export class Sport{
  constructor(
    public sportId:number,
    public sportName:string,
    public sportImageUrl:string,
    public status:string,
    public courts:Courts[]
  ){


  }
}
