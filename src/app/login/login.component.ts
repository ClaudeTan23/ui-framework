import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
  user: DataService = inject(DataService);
  router: Router = inject(Router);
  check: boolean = false;

  @ViewChild("username") username: any;
  @ViewChild("password") password: any;

  submit(event: any): void 
  {
    const username: String = this.username.nativeElement.value.trim();
    const password: String = this.password.nativeElement.value.trim();

    if(this.user.currentUser !== undefined && this.user.currentUser.username === username && this.user.currentUser.password === password)
    {
      this.router.navigate(["/home"]);

    } else 
    {
      this.check = true;
    }

    event.preventDefault();
  }

}
