import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService, User } from '../data.service';

@Component({
  selector: 'app-list-search',
  standalone: true,
  imports: [CommonModule, SearchHeaderComponent, FooterComponent, RouterLink, RouterLink],
  templateUrl: './list-search.component.html',
  styleUrl: './list-search.component.css'
})
export class ListSearchComponent implements OnInit, OnChanges
{
  user: DataService = inject(DataService);
  result: boolean = false;
  route: ActivatedRoute = inject(ActivatedRoute);
  load: boolean = false;
  @Input() query!: String;

  userResult: User[] | undefined;;

  ngOnInit(): void 
  {
    this.load = true;
    const nameQuery: string = this.route.snapshot.params["name"];
    const user: User[] | undefined = this.user.getUserByName(nameQuery);

    this.userResult = user;
    this.result = user!.length > 0 ? true : false;

  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    const nameQuery: string = this.route.snapshot.params['name'];
    const user: User[] | undefined = this.user.getUserByName(nameQuery);

    this.userResult = user;
    this.result = user!.length > 0 ? true : false;
  }
  

}
