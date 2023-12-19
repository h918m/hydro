import { Component } from '@angular/core';
import { LandingNavbarComponent } from '../../components/landing-navbar/navbar.component';
import { LandingSidebarComponent } from '../../components/landing-sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-renew',
  standalone: true,
  imports: [
    LandingNavbarComponent,
    LandingSidebarComponent,
    CommonModule,
    RouterLink,
    MatIconModule,
    MatStepperModule,
  ],
  templateUrl: './renew.component.html',
})
export class RenewComponent {}
