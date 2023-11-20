import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent 
{
  HeaderText: String = "XYZ Cars";
  WelcomeText: String = 'Welcome to XYZ Cars';
  @Input() Welcome!: String;
  t(): void 
  {
    console.log(this.Welcome);
  }
}
