import { Component, OnInit,Output, EventEmitter,Input} from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  check_if_false=false;
  async sendConnectionInfo(username: string,password : string) {
    // Do something with the content here
    console.log(username);
    console.log(password);
  
    await this.userService.login(username, password);
    let check_if_log = this.userService.isLoggedIn();

    if (check_if_log){
    this.router.navigate(['dashboard']);
    }else{this.check_if_false=true;}
  }

}
