import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: String;
  username: String;
  password: String;

  constructor(
    public authService: AuthServiceService,
    public generalService: GeneralService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onSignupUser() {
    const user = { name: this.name, username: this.username, password: this.password, type: 'NU' };
    this.authService.authUserCredentials(user, 'r').subscribe(res => {
      const resp = JSON.parse(JSON.stringify(res));
      if (resp.success) {
        this.generalService.toast(resp.msg, undefined, 'success');
        this.router.navigate(['/login']);
      } else {
        this.generalService.Swal('Error', resp.msg, 'error');
      }
    })
  }
}
