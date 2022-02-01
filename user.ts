export class User {
    userId:number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    
    gender:string;
    phoneNumber:number;
    constructor(userId:number,firstName:string,
        lastName:string,
        email:string,
        password:string,
        gender:string,
        phoneNumber:number)
        {
            this.userId=userId;
            this.firstName=firstName;
            this.lastName=lastName;
            this.email=email;
            this.password=password;
            this.gender=gender;
            this.phoneNumber=phoneNumber;
            
        }
         

}
