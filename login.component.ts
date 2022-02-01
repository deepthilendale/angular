import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import {User} from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service:RegistrationService) { }
   user =new User(1,"deepthi","lendale","deepthi@gmail.com","deepu","female",9100491533);
  ngOnInit(): void {
  }
  loginUser(){
    return this._service.loginUserFromRemote(this.user).subscribe(
      data=>console.log("response received"),
      error=>console.log("exception occured")
    );
  }
}
