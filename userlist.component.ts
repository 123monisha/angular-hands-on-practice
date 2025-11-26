import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  value: string = '';
  username: string = '';
  password: string = '';

  Login()
  {
    if (this.username == 'admin' && this.password == '12345')
    {
      this.value = 'Login Successful';
    }
    else
    {
      this.value = 'Invalid Credentials';
    }
  }
}
