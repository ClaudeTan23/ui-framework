import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: User[] = [
    {
      id: 1,
      username: 'peter',
      password: '123456',
      email: 'peter@mail.com',
      img: '/assets/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg',
    },
  ];

  verification: String = '123';

  posts: post[] = [
    {
      id: 1,
      user: 'peter',
      img: '/assets/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim illum accusantium tempora velit iure nulla, ex cumque consequatur pariatur, a commodi temporibus maxime error expedita cum officia! Quibusdam, tempora.',
      comments: [
        {
          user: 'peter',
          img: '/assets/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim illum accusantium tempora velit iure nulla, ex cumque consequatur pariatur, a commodi temporibus maxime error expedita cum officia! Quibusdam, tempora.',
        },
      ],
    },
  ];

  currentUser: User | undefined;

  getUserById(id: Number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  getUserByName(name: string): User[] | undefined {
    return this.users.filter(u => u.username.includes(name));
  }
}

export interface User 
{
  id: Number,
  username: String,
  password: String,
  email: String,
  img: String
}

export interface post
{
  id: Number,
  user: String,
  img: String,
  post: String,
  comments: {
    user: String,
    img: String,
    comment: String
  }[]
  
}
