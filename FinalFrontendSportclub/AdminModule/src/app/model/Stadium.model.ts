import { Sport } from "./Sport.model";



export class Stadium{

  constructor(
    public stadiumId:number,
    public stadiumName:string,
    public location:string,
    public sports:Sport[]
  ){

  }
}
