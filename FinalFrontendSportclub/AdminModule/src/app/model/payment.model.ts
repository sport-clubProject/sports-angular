export class Payment{
  constructor(
    public amount:number,
    public paymentMode:string,
    public status:string,
    public userId:number
  ){}
}
