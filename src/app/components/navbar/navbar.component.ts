import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(
    public authService: AuthServiceService,
    public storeService: StorageService
  ) { }

  ngOnInit(): void {
    this.loadUser()
    this.storeService.watchStorage().subscribe((data: string) => {
      this.loadUser();
      console.log(this.authService.user);
    });
  }

  loadUser() {
    this.authService.loadUser();
    this.username = this.authService.user?.username ?? '';
  }
}
