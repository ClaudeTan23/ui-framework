import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, NavigationExtras, Router, RouterLink, RouterModule } from '@angular/router';
import { DataService, User } from '../data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @ViewChild('form') form: ElementRef<HTMLFormElement> | undefined;
  @ViewChild('username') username: any;
  @ViewChild('email') email: any;
  @ViewChild('password') password: any;
  @ViewChild('cpassword') passwordC: any;

  user: DataService = inject(DataService);

  route: Router | undefined = inject(Router);
  router: ActivatedRoute = inject(ActivatedRoute);
  check: boolean = false;

  constructor() {}

  register(f: any): void {

    if(this.password.nativeElement.value.trim() === this.passwordC.nativeElement.value.trim())
    {
      this.user.currentUser = {
        id: this.user.users.length + 1,
        username: this.username.nativeElement.value.trim(),
        password: this.password.nativeElement.value.trim(),
        email: this.email.nativeElement.value.trim(),
        img: '/assets/images/blankpf.jpg',
      };

      this.user.users.push(this.user.currentUser);

      this.route?.navigate(['/register-confirmation'], {
        relativeTo: this.router,
      });

    } else {
      this.check = true;
  
    }

    f.preventDefault();
  }
}
