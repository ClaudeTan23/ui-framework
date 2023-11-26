import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-success',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, RouterLink, RouterModule],
  templateUrl: './reset-success.component.html',
  styleUrl: './reset-success.component.css'
})
export class ResetSuccessComponent {

}
