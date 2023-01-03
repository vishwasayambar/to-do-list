import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.authService.user().subscribe(response => {
      console.log(response);
    })
  }

  ngOnInit(): void {
  }

}
