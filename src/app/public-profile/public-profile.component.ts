import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { DataService, User } from '../data.service';

@Component({
  selector: 'app-public-profile',
  standalone: true,
  imports: [CommonModule, SearchHeaderComponent, FooterComponent, RouterModule, RouterLink],
  templateUrl: './public-profile.component.html',
  styleUrl: './public-profile.component.css'
})
export class PublicProfileComponent implements OnInit 
{
  user: DataService = inject(DataService);
  route: ActivatedRoute = inject(ActivatedRoute);
  profile: User | undefined;

  ngOnInit(): void 
  {
    const userId: String = this.route.snapshot.params['id'];
    const userProfile: User | undefined = this.user.getUserById(Number(userId));

    this.profile = userProfile;
    
  }
}
