import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent 
{
  user: DataService = inject(DataService);
  router: Router = inject(Router);
  check: boolean = false;

  @ViewChild("email") email: any| undefined;

  submit(event: any)
  {
    if(this.user.currentUser !== undefined && this.email.nativeElement.value.trim() === this.user.currentUser.email)
    {
      this.router.navigate(['reset']);

    } else 
    {
      this.check = true;
    }

    event.preventDefault();
  }
}
