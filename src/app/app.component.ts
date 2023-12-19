import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingNavbarComponent } from './components/landing-navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingNavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Hydronet';
}
