import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, FooterComponent, HeaderComponent],
  templateUrl: './register-confirmation.component.html',
  styleUrl: './register-confirmation.component.css'
})
export class RegisterConfirmationComponent
{
  check: boolean = false;
  verification: DataService = inject(DataService);
  router: Router = inject(Router);

  @ViewChild("input") input: ElementRef<HTMLInputElement> | undefined;
  
  verify(event: any): void 
  {
    const value: String = this.input!.nativeElement.value.trim();

    if(value === this.verification.verification)
    {
      this.router.navigate(['/register-success']);

    } else 
    {
      this.check = true;
    }
    
    event.preventDefault();
  }

}
