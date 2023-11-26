import { Component, Input, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { DataService, User } from '../data.service';
import { ListSearchComponent } from '../list-search/list-search.component';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterModule, RouterLink, ListSearchComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent {
  router: Router = inject(Router);
  @ViewChild('searchInput') input: any;
  queryName: String = "";

  search(event: any): void {
    const value: String = this.input.nativeElement.value.trim();

    if (event.key === 'Enter' && value !== '') {
      this.router.navigate(['user', value]);
      this.queryName = value;
      console.log("query")
    }
  }
}
