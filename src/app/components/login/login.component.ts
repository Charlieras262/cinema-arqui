import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    public authService: AuthServiceService,
    public generalService: GeneralService,
    public router: Router,
    public rutaActiva: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  onLoginUser(){
    const user = { username: this.username, password: this.password};
    this.authService.authUserCredentials(user, 'l').subscribe(res => {
      const resp = JSON.parse(JSON.stringify(res));
      if(resp.success){
        this.generalService.toast(resp.msg, undefined, 'success');
        this.router.navigate(['/reservas', this.rutaActiva.snapshot.params.id]);
        this.authService.storeUserData(resp.token, resp.user);
      } else {
        this.generalService.Swal('Error', resp.msg, 'error');
      }
    })
  }

}
