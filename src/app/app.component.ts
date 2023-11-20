import { Component, Directive, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WelcomeComponent, RouterModule],
  template: `
    <div class="header">
      <a [routerLink]="['/']">
        <span>{{ HeaderText }}</span>
      </a>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  HeaderText: String = 'XYZ Cars';
}
