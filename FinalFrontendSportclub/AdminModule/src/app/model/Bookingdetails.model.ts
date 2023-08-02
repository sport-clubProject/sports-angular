export class BookingDetails{
    constructor(
        public sportName?:string,
        public slotTime?:string,
        public courtName?:string,
        public bookingdate?:string,
        public userId?:number,
        public username?:string,
        public price?:number,
        public status?:string,
        public paymentMode?:string
    ){

    }
}
