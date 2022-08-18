import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User()

  faUser = faUser

  fazerLogin() {
    console.log("Funcionando");
    console.log(this.userModel);
  }
  

  helloWorld() {
    console.log("Funcionando");
  }

}
