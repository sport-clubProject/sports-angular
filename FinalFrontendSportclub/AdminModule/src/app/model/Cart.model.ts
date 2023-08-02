export class Cart{
       constructor(
        public price:number,
        public cartId:number,
        public sportName?:string,
        public slotTime?:string,
        public courtName?:string,
        public courtImageurl?:string,
        public userId?:number,
        public Bookingdate?:Date
       ){}
}
