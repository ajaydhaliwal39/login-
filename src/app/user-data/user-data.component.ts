import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userDate: any;

  constructor(  
    private auth: AuthService
  ) {
   this.userDate = JSON.parse(localStorage['userData'])
  }

  ngOnInit(): void {
    this.auth.successMsg('login Success ');
  }
}
