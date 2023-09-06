import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    "emailId": "broly",
    "fullName": "string",
    "password": "sontoloyo",
    "montol": "kentang"
  }

  constructor(private http: HttpClient, private router: Router) {

  }

  onLogin() {
    const loginUrl = "https://freeapi.miniprojectideas.com/api/Jira/Login";

    this.http.post(loginUrl, this.loginObj).subscribe(
      (response:any)=>{
        if(typeof response !== 'object') { return alert('wrong data type')}
        switch(response.data ? true : false){
          case false:
            alert(response.message);
            return;
          case true:
            alert('successfully logged in!');
            alert(JSON.stringify(response.data))
            // this.router.navigateByUrl('/board')
            return;
        }
      }
    )
  }
}
