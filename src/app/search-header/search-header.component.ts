import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './search-header.component.html',
  styleUrl: './search-header.component.css'
})
export class SearchHeaderComponent 
{
  router: Router = inject(Router);
  @ViewChild("searchInput") input: any;

  search(event: any): void 
  {
    const value: String = this.input.nativeElement.value.trim();
    console.log(123)

    if(event.key === "Enter" && value !== "")
    {
      console.log(312)
      this.router.navigate(['user', value]);
    }
  }
}
