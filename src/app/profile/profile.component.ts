import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { DataService, User } from '../data.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, SearchHeaderComponent, FooterComponent, RouterModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit
{
  user: DataService = inject(DataService);
  auth: boolean = false;
  userProfile: User | undefined;
  load: boolean = false;
  invalid: Boolean = true;

  @ViewChild("email") email: any;
  @ViewChild("password") password: any;
  @ViewChild("cpassword") cPassword: any;

  ngOnInit(): void 
  {
    this.load = true;
    this.auth = this.user.currentUser !== undefined ? true : false;
    this.userProfile = this.user.currentUser;

  }

  updateProfile(event: any): void 
  {
    const emailValue: String = this.email.nativeElement.value.trim();
    const passwordValue: String = this.password.nativeElement.value.trim();
    const cPasswordValue: String = this.cPassword.nativeElement.value.trim();

    if(passwordValue !== cPasswordValue)
    {
      this.invalid = false;

    } else 
    {
      this.user.currentUser!.email = emailValue;
      this.user.currentUser!.password = passwordValue;

      alert("success");

    }

    event.preventDefault();
    
  }

}
