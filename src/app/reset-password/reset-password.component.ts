import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, RouterLink, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent 
{
  user: DataService = inject(DataService);
  router: Router = inject(Router);
  check: boolean = false;

  @ViewChild("password") password: any;
  @ViewChild("cpassword") cPassword: any;

  submit(event: any): void 
  {
    const password: String = this.password.nativeElement.value.trim();
    const cPassword: String = this.cPassword.nativeElement.value.trim();

    if(password === cPassword)
    {
      this.user.currentUser!.password = password;
      this.router.navigate(['reset-success']);

    } else 
    {
      this.check = true;
    }

    event.preventDefault();
  }
}
