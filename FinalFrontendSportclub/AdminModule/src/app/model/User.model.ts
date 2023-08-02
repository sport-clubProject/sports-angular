export class UserDetails{
  constructor(
    public role:string,
    public userId:number,
    public userName?:string,
    public email?:string,
    public password?:string,
    public userMobile?:string,
    public gender?:string,
    public userAge?:number,
    public isToggleOn: boolean = false
  ){}
}
