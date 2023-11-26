import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { DataService, post } from '../data.service';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, FooterComponent, SearchHeaderComponent, RouterLink, RouterModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent implements OnInit
{
  data: DataService = inject(DataService);
  posts: post[] | undefined;

  @ViewChild("postInput") postInput: any;
  @ViewChild("modal") modal: any;

  ngOnInit(): void 
  {
    this.posts = this.data.posts;
  }

  comment(event: any, id: Number): void
  {
    const user: any = this.data.currentUser;
    const postId: Number = Number(id);
    let value: any = event.target.value.trim();

    console.log(event.target.value);

    if(event.key === "Enter" && value !== "")
    {
      event.target.value = "";

      if(user === undefined)
      {
        const comment: any = {
          user: 'unknown',
          comment: value,
          img: '/assets/images/blankpf.jpg',
        };

        const post: any = this.data.posts.find((d) => d.id === postId);
        post?.comments.push(comment);

        
      } else 
      {
        const comment: any = {
          user: user.username,
          comment: value,
          img: user.img,
        };

        const post: any = this.data.posts.find((d) => d.id === postId);
        post?.comments.push(comment);
      }
    }
  }

  post(): void 
  {
    const value: String = this.postInput.nativeElement.value.trim();
    const user: any = this.data.currentUser;

    if(value !== "")
    {
      if(user === undefined)
      {
        const post: any = {
          id: this.data.posts.length + 1,
          user: 'unknown',
          post: value,
          img: '/assets/images/blankpf.jpg',
          comments: [],
        };

        this.data.posts.unshift(post);

      } else 
      {
        const post: any = {
          id: this.data.posts.length + 1,
          user: user.username,
          post: value,
          img: user.img,
          comments: [],
        };

        this.data.posts.unshift(post);
      }

      this.postInput.nativeElement.value = "";
      this.modal.nativeElement.click();

    }
  }
  
}
