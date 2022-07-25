import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Token } from 'src/app/models/token';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public user: User = new User();
  public token: Token = new Token();

  constructor(
    public dialogRef: MatDialogRef<AuthComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  tryLogIn() {
    this.userService.logIn(this.user).subscribe((theToken) => {
      this.user = this.token.getDecodedAccessToken(theToken)!;
      if (this.user) {
        this.dialogRef.close();
      }
    });
  }
}
