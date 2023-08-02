import { Sport } from "./Sport.model";

export class Stadiums{
  constructor(
    public stadiumId:number,
    public stadiumName:string,
    public location:string,
    public sports:Sport[]
  ){}
}
